/**
 * Simulated one-minute candle in milliseconds.
 */
var ONE_MINUTE_MS = 60 * 1000;

/**
 * Tick frequency for updating the chart.
 * In a real app this would be ~60000 (one minute per candle).
 * For demo purposes it is 100 ms so changes are visible quickly.
 */
var UPDATE_INTERVAL_MS = 100;

/**
 * After this many ticks, a brand-new one-minute candle is appended.
 * With UPDATE_INTERVAL_MS at 100 ms this is roughly one new candle per second.
 */
var UPDATES_PER_CANDLE = 10;

/**
 * setData is called every tick, so its animation is disabled.
 */
var UPDATE_ANIMATION_DURATION = 0;

/**
 * Short animation when a new candle is appended.
 */
var ADD_ANIMATION_DURATION = 300;

/**
 * Number of historical one-minute candles generated locally.
 */
var INITIAL_CANDLE_COUNT = 120;

/**
 * Starting price used when generating the historical data.
 */
var INITIAL_PRICE = 375;

var stockChart;
var stockData = [];
var updateTimer = null;
var updateIndex = 0;

/**
 * Returns a random number between the given minimum and maximum.
 */
function randomBetween(minimum, maximum) {
    return minimum + Math.random() * (maximum - minimum);
}

/**
 * Rounds the given value to two decimal places.
 */
function correctFloat(value) {
    return Number(value.toFixed(2));
}

/**
 * Returns the timestamp (ms) representing the start of the current minute.
 */
function getCurrentMinute() {
    return Math.floor(Date.now() / ONE_MINUTE_MS) * ONE_MINUTE_MS;
}

/**
 * Builds a single historical OHLCV candle.
 */
function createHistoricalCandle(timestamp, openingPrice) {
    var movement = randomBetween(-1.5, 1.5);
    var close = correctFloat(Math.max(1, openingPrice + movement));
    var high = correctFloat(
        Math.max(openingPrice, close) + randomBetween(0.05, 0.7)
    );
    var low = correctFloat(
        Math.max(1, Math.min(openingPrice, close) - randomBetween(0.05, 0.7))
    );

    return {
        x: new Date(timestamp),
        open: correctFloat(openingPrice),
        high: high,
        low: low,
        close: close,
        volume: Math.round(randomBetween(1000, 5000))
    };
}

/**
 * Populates `stockData` with `INITIAL_CANDLE_COUNT` historical candles
 * ending at the start of the current minute.
 */
function createInitialLocalData() {
    var currentMinute = getCurrentMinute();
    var startingTime =
        currentMinute - (INITIAL_CANDLE_COUNT - 1) * ONE_MINUTE_MS;

    var price = INITIAL_PRICE;

    stockData = [];

    for (var index = 0; index < INITIAL_CANDLE_COUNT; index++) {
        var timestamp = startingTime + index * ONE_MINUTE_MS;
        var candle = createHistoricalCandle(timestamp, price);

        stockData.push(candle);
        price = candle.close;
    }
}

/**
 * Returns the StockSeries wrapper that exposes the live
 * setData / addPoint methods.
 */
function getCandleSeries() {
    var chart = stockChart;

    if (
        chart &&
        chart.series &&
        chart.series.length &&
        typeof chart.series[0].setData === 'function' &&
        typeof chart.series[0].addPoint === 'function'
    ) {
        return chart.series[0];
    }

    return null;
}

/**
 * Builds an updated version of the currently forming candle.
 * Open price and timestamp remain unchanged; close, high, low,
 * and volume are re-randomized.
 */
function createUpdatedCandle(currentCandle) {
    var movement = correctFloat(randomBetween(-1.5, 1.5));
    var newClose = correctFloat(Math.max(1, currentCandle.close + movement));

    return {
        x: currentCandle.x,
        open: currentCandle.open,
        high: correctFloat(Math.max(currentCandle.high, newClose)),
        low: correctFloat(Math.min(currentCandle.low, newClose)),
        close: newClose,
        volume: currentCandle.volume + Math.round(randomBetween(10, 100))
    };
}

/**
 * Builds the next one-minute candle, opening at the previous close.
 */
function createNewCandle(previousCandle) {
    var openingPrice = previousCandle.close;

    return {
        x: new Date(previousCandle.x.getTime() + ONE_MINUTE_MS),
        open: openingPrice,
        high: openingPrice,
        low: openingPrice,
        close: openingPrice,
        volume: Math.round(randomBetween(1000, 5000))
    };
}

/**
 * Calls series.setData() to replace the currently forming candle.
 */
function updateCurrentPoint(candle) {
    var series = getCandleSeries();

    if (!series) {
        return;
    }

    series.setData(candle, UPDATE_ANIMATION_DURATION);
}

/**
 * Calls series.addPoint() to append a new one-minute candle.
 */
function addNewPoint(candle) {
    var series = getCandleSeries();

    if (!series) {
        return;
    }

    series.addPoint(candle, ADD_ANIMATION_DURATION);
}

/**
 * Decides whether the current tick should update the forming candle
 * or append a new one, then calls the appropriate series method.
 */
function processDynamicUpdate() {
    if (!stockData.length) {
        return;
    }

    var lastIndex = stockData.length - 1;
    var currentCandle = stockData[lastIndex];

    var shouldAddNewCandle =
        updateIndex > 0 && updateIndex % UPDATES_PER_CANDLE === 0;

    if (shouldAddNewCandle) {
        var newCandle = createNewCandle(currentCandle);

        stockData.push(newCandle);
        addNewPoint(newCandle);
    } else {
        var updatedCandle = createUpdatedCandle(currentCandle);

        stockData[lastIndex] = updatedCandle;
        updateCurrentPoint(updatedCandle);
    }

    updateIndex++;
}

/**
 * Starts the simulated live update loop.
 */
function startDynamicUpdates() {
    if (updateTimer !== null) {
        return;
    }

    updateTimer = window.setInterval(processDynamicUpdate, UPDATE_INTERVAL_MS);
}

/**
 * Stops the simulated live update loop.
 */
function stopDynamicUpdates() {
    if (updateTimer !== null) {
        window.clearInterval(updateTimer);
        updateTimer = null;
    }
}

createInitialLocalData();

stockChart = new ej.charts.StockChart({
    width: '1100px',
    height: '455px',
    title: 'Live Stock Data',
    theme: 'Material',
    chartArea: {
        border: { width: 0 }
    },
    primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'HH:mm'
    },
    primaryYAxis: {
        labelPosition: 'Outside'
    },
    series: [
        {
            dataSource: stockData,
            type: 'Candle',
            xName: 'x',
            open: 'open',
            high: 'high',
            low: 'low',
            close: 'close',
            volume: 'volume',
            lastValueLabel: {
                enable: true,
                background: '#e74c3d',
                dashArray: '3,2',
                lineWidth: 1,
                font: {
                    color: '#ffffff',
                    size: '11px'
                }
            }
        }
    ],
    seriesType: [],
    indicatorType: [],
    trendlineType: [],
    periods: [
        { text: '1H', interval: 1, intervalType: 'Hours', selected: true },
        { text: 'All' }
    ],
    enableCustomRange: false,
    loaded: function () {
        startDynamicUpdates();
    }
});

stockChart.appendTo('#container');

/**
 * Clears the update timer when the sample page is unloaded.
 */
window.addEventListener('beforeunload', function () {
    stopDynamicUpdates();
});