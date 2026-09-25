import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject,
    DateTime, CandleSeries, LastValueLabel
} from '@syncfusion/ej2-react-charts';

/**
 * Simulated one-minute candle in milliseconds.
 */
const ONE_MINUTE_MS = 60 * 1000;

/**
 * Tick frequency for updating the chart.
 * In a real app this would be ~60000 (one minute per candle).
 * For demo purposes it is 100 ms so changes are visible quickly.
 */
const UPDATE_INTERVAL_MS = 100;

/**
 * After this many ticks, a brand-new one-minute candle is appended.
 * With UPDATE_INTERVAL_MS at 100 ms this is roughly one new candle per second.
 */
const UPDATES_PER_CANDLE = 10;

/**
 * setData is called every tick, so its animation is disabled.
 */
const UPDATE_ANIMATION_DURATION = 0;

/**
 * Short animation when a new candle is appended.
 */
const ADD_ANIMATION_DURATION = 300;

/**
 * Number of historical one-minute candles generated locally.
 */
const INITIAL_CANDLE_COUNT = 120;

/**
 * Starting price used when generating the historical data.
 */
const INITIAL_PRICE = 375;

let stockChart = null;
let stockData = [];
let updateTimer = null;
let updateIndex = 0;

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
    const movement = randomBetween(-1.5, 1.5);
    const close = correctFloat(Math.max(1, openingPrice + movement));
    const high = correctFloat(
        Math.max(openingPrice, close) + randomBetween(0.05, 0.7)
    );
    const low = correctFloat(
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
    const currentMinute = getCurrentMinute();
    const startingTime =
        currentMinute - (INITIAL_CANDLE_COUNT - 1) * ONE_MINUTE_MS;

    let price = INITIAL_PRICE;

    stockData = [];

    for (let index = 0; index < INITIAL_CANDLE_COUNT; index++) {
        const timestamp = startingTime + index * ONE_MINUTE_MS;
        const candle = createHistoricalCandle(timestamp, price);

        stockData.push(candle);
        price = candle.close;
    }
}

/**
 * Returns the StockSeries wrapper that exposes the live
 * setData / addPoint methods.
 */
function getCandleSeries() {
    const chart = stockChart;

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
    const movement = correctFloat(randomBetween(-1.5, 1.5));
    const newClose = correctFloat(Math.max(1, currentCandle.close + movement));

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
    const openingPrice = previousCandle.close;

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
    const series = getCandleSeries();

    if (!series) {
        return;
    }

    series.setData(candle, UPDATE_ANIMATION_DURATION);
}

/**
 * Calls series.addPoint() to append a new one-minute candle.
 */
function addNewPoint(candle) {
    const series = getCandleSeries();

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

    const lastIndex = stockData.length - 1;
    const currentCandle = stockData[lastIndex];

    const shouldAddNewCandle =
        updateIndex > 0 && updateIndex % UPDATES_PER_CANDLE === 0;

    if (shouldAddNewCandle) {
        const newCandle = createNewCandle(currentCandle);

        stockData.push(newCandle);
        addNewPoint(newCandle);
    } else {
        const updatedCandle = createUpdatedCandle(currentCandle);

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

function App() {
    const loaded = (args) => {
        stockChart = (args.chart && args.chart.ej2Instances)
            ? args.chart.ej2Instances[0]
            : null;
        startDynamicUpdates();
    };

    createInitialLocalData();

    React.useEffect(() => {
        const handleBeforeUnload = () => {
            stopDynamicUpdates();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            stopDynamicUpdates();
        };
    }, []);

    return (
        <StockChartComponent id='stockcharts'
            width='1100px'
            height='455px'
            title='Live Stock Data'
            theme='Material'
            chartArea={{ border: { width: 0 } }}
            primaryXAxis={{ valueType: 'DateTime', labelFormat: 'HH:mm' }}
            primaryYAxis={{ labelPosition: 'Outside' }}
            seriesType={[]}
            indicatorType={[]}
            trendlineType={[]}
            periods={[
                { text: '1H', interval: 1, intervalType: 'Hours', selected: true },
                { text: 'All' }
            ]}
            enableCustomRange={false}
            loaded={loaded}>
            <StockChartSeriesCollectionDirective>
                <StockChartSeriesDirective
                    dataSource={stockData}
                    type='Candle'
                    xName='x'
                    open='open'
                    high='high'
                    low='low'
                    close='close'
                    volume='volume'
                    lastValueLabel={{
                        enable: true,
                        background: '#e74c3d',
                        dashArray: '3,2',
                        lineWidth: 1,
                        font: {
                            color: '#ffffff',
                            size: '11px'
                        }
                    }} />
            </StockChartSeriesCollectionDirective>
            <Inject services={[DateTime, CandleSeries, LastValueLabel]} />
        </StockChartComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));