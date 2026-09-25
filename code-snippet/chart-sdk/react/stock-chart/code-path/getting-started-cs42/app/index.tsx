import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject,
    DateTime, CandleSeries, LastValueLabel, IStockChartEventArgs
} from '@syncfusion/ej2-react-charts';

interface StockData {
    x: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

const ONE_MINUTE_MS: number = 60 * 1000;
const UPDATE_INTERVAL_MS: number = 100;
const UPDATES_PER_CANDLE: number = 10;
const UPDATE_ANIMATION_DURATION: number = 0;
const ADD_ANIMATION_DURATION: number = 300;
const INITIAL_CANDLE_COUNT: number = 120;
const INITIAL_PRICE: number = 375;

let stockChart: StockChartComponent | null = null;
let stockData: StockData[] = [];
let updateTimer: number | null = null;
let updateIndex: number = 0;

function randomBetween(minimum: number, maximum: number): number {
    return minimum + Math.random() * (maximum - minimum);
}

function correctFloat(value: number): number {
    return Number(value.toFixed(2));
}

function getCurrentMinute(): number {
    return Math.floor(Date.now() / ONE_MINUTE_MS) * ONE_MINUTE_MS;
}

function createHistoricalCandle(timestamp: number, openingPrice: number): StockData {
    const movement: number = randomBetween(-1.5, 1.5);
    const close: number = correctFloat(Math.max(1, openingPrice + movement));
    const high: number = correctFloat(
        Math.max(openingPrice, close) + randomBetween(0.05, 0.7)
    );
    const low: number = correctFloat(
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

function createInitialLocalData(): void {
    const currentMinute: number = getCurrentMinute();
    const startingTime: number =
        currentMinute - (INITIAL_CANDLE_COUNT - 1) * ONE_MINUTE_MS;
    let price: number = INITIAL_PRICE;
    stockData = [];

    for (let index: number = 0; index < INITIAL_CANDLE_COUNT; index++) {
        const timestamp: number = startingTime + index * ONE_MINUTE_MS;
        const candle: StockData = createHistoricalCandle(timestamp, price);
        stockData.push(candle);
        price = candle.close;
    }
}

function getCandleSeries(): any {
    const chart: any = stockChart as any;
    if (chart && chart.series && chart.series.length &&
        typeof chart.series[0].setData === 'function' &&
        typeof chart.series[0].addPoint === 'function') {
        return chart.series[0];
    }
    return null;
}

function createUpdatedCandle(currentCandle: StockData): StockData {
    const movement: number = correctFloat(randomBetween(-1.5, 1.5));
    const newClose: number = correctFloat(Math.max(1, currentCandle.close + movement));
    return {
        x: currentCandle.x,
        open: currentCandle.open,
        high: correctFloat(Math.max(currentCandle.high, newClose)),
        low: correctFloat(Math.min(currentCandle.low, newClose)),
        close: newClose,
        volume: currentCandle.volume + Math.round(randomBetween(10, 100))
    };
}

function createNewCandle(previousCandle: StockData): StockData {
    const openingPrice: number = previousCandle.close;
    return {
        x: new Date(previousCandle.x.getTime() + ONE_MINUTE_MS),
        open: openingPrice,
        high: openingPrice,
        low: openingPrice,
        close: openingPrice,
        volume: Math.round(randomBetween(1000, 5000))
    };
}

function updateCurrentPoint(candle: StockData): void {
    const series: any = getCandleSeries();
    if (!series) { return; }
    series.setData(candle, UPDATE_ANIMATION_DURATION);
}

function addNewPoint(candle: StockData): void {
    const series: any = getCandleSeries();
    if (!series) { return; }
    series.addPoint(candle, ADD_ANIMATION_DURATION);
}

function processDynamicUpdate(): void {
    if (!stockData.length) { return; }
    const lastIndex: number = stockData.length - 1;
    const currentCandle: StockData = stockData[lastIndex];
    const shouldAddNewCandle: boolean =
        updateIndex > 0 && updateIndex % UPDATES_PER_CANDLE === 0;

    if (shouldAddNewCandle) {
        const newCandle: StockData = createNewCandle(currentCandle);
        stockData.push(newCandle);
        addNewPoint(newCandle);
    } else {
        const updatedCandle: StockData = createUpdatedCandle(currentCandle);
        stockData[lastIndex] = updatedCandle;
        updateCurrentPoint(updatedCandle);
    }
    updateIndex++;
}

function startDynamicUpdates(): void {
    if (updateTimer !== null) { return; }
    updateTimer = window.setInterval(processDynamicUpdate, UPDATE_INTERVAL_MS);
}

function stopDynamicUpdates(): void {
    if (updateTimer !== null) {
        window.clearInterval(updateTimer);
        updateTimer = null;
    }
}

function App() {
    const loaded = (args: IStockChartEventArgs): void => {
        stockChart = (args.chart && (args.chart as any).ej2Instances)
            ? ((args.chart as any).ej2Instances[0] as StockChartComponent)
            : null;
        startDynamicUpdates();
    };

    createInitialLocalData();

    React.useEffect(() => {
        const handleBeforeUnload = (): void => { stopDynamicUpdates(); };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return (): void => {
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