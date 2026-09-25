import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject,
    DateTime, CandleSeries, LastValueLabel
} from '@syncfusion/ej2-react-charts';

const ONE_MINUTE_MS = 60 * 1000;
const UPDATE_INTERVAL_MS = 100;
const UPDATES_PER_CANDLE = 10;
const UPDATE_ANIMATION_DURATION = 0;
const ADD_ANIMATION_DURATION = 300;
const INITIAL_CANDLE_COUNT = 120;
const INITIAL_PRICE = 375;

let stockChart = null;
let stockData = [];
let updateTimer = null;
let updateIndex = 0;

function randomBetween(minimum, maximum) {
    return minimum + Math.random() * (maximum - minimum);
}

function correctFloat(value) {
    return Number(value.toFixed(2));
}

function getCurrentMinute() {
    return Math.floor(Date.now() / ONE_MINUTE_MS) * ONE_MINUTE_MS;
}

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

function getCandleSeries() {
    const chart = stockChart;
    if (chart && chart.series && chart.series.length &&
        typeof chart.series[0].setData === 'function' &&
        typeof chart.series[0].addPoint === 'function') {
        return chart.series[0];
    }
    return null;
}

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

function updateCurrentPoint(candle) {
    const series = getCandleSeries();
    if (!series) { return; }
    series.setData(candle, UPDATE_ANIMATION_DURATION);
}

function addNewPoint(candle) {
    const series = getCandleSeries();
    if (!series) { return; }
    series.addPoint(candle, ADD_ANIMATION_DURATION);
}

function processDynamicUpdate() {
    if (!stockData.length) { return; }
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

function startDynamicUpdates() {
    if (updateTimer !== null) { return; }
    updateTimer = window.setInterval(processDynamicUpdate, UPDATE_INTERVAL_MS);
}

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
        const handleBeforeUnload = () => { stopDynamicUpdates(); };
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
                        font: { color: '#ffffff', size: '11px' }
                    }} />
            </StockChartSeriesCollectionDirective>
            <Inject services={[DateTime, CandleSeries, LastValueLabel]} />
        </StockChartComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));