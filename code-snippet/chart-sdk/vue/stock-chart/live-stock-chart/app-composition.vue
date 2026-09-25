<template>
  <div class="control-section" style="padding: 5%;">
    <ejs-stockchart
      id="stockchartcontainer"
      ref="stockChartRef"
      :width="width"
      :height="height"
      :title="title"
      :theme="theme"
      :chartArea="chartArea"
      :primaryXAxis="primaryXAxis"
      :primaryYAxis="primaryYAxis"
      :seriesType="seriesType"
      :indicatorType="indicatorType"
      :trendlineType="trendlineType"
      :periods="periods"
      :enableCustomRange="enableCustomRange"
      :loaded="onChartLoaded"
    >
      <e-stockchart-series-collection>
        <e-stockchart-series
          :dataSource="stockData"
          type="Candle"
          xName="x"
          open="open"
          high="high"
          low="low"
          close="close"
          volume="volume"
          :lastValueLabel="lastValueLabel"
        >
        </e-stockchart-series>
      </e-stockchart-series-collection>
    </ejs-stockchart>
  </div>
</template>

<script setup lang="ts">
import {
  onBeforeUnmount,
  provide,
  ref
} from 'vue';

import {
  StockChartComponent as EjsStockchart,
  StockChartSeriesCollectionDirective as EStockchartSeriesCollection,
  StockChartSeriesDirective as EStockchartSeries,
  DateTime,
  CandleSeries,
  LastValueLabel
} from '@syncfusion/ej2-vue-charts';

interface StockData {
  x: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

/**
 * Simulated one-minute candle in milliseconds.
 */
const ONE_MINUTE_MS: number = 60 * 1000;

/**
 * Tick frequency for updating the chart.
 * In a real app this would be approximately 60000.
 * For demo purposes it is 100 ms so changes are visible quickly.
 */
const UPDATE_INTERVAL_MS: number = 100;

/**
 * After this many ticks, a new one-minute candle is appended.
 */
const UPDATES_PER_CANDLE: number = 10;

/**
 * setData is called every tick, so its animation is disabled.
 */
const UPDATE_ANIMATION_DURATION: number = 0;

/**
 * Short animation when a new candle is appended.
 */
const ADD_ANIMATION_DURATION: number = 300;

/**
 * Number of historical one-minute candles generated locally.
 */
const INITIAL_CANDLE_COUNT: number = 120;

/**
 * Starting price used when generating the historical data.
 */
const INITIAL_PRICE: number = 375;

const stockChartRef = ref<any>(null);

const width: string = '1100px';
const height: string = '455px';
const title: string = 'Live Stock Data';
const theme: string = 'Material';

const chartArea: Object = {
  border: {
    width: 0
  }
};

const primaryXAxis: Object = {
  valueType: 'DateTime',
  labelFormat: 'HH:mm'
};

const primaryYAxis: Object = {
  labelPosition: 'Outside'
};

const seriesType: string[] = [];
const indicatorType: string[] = [];
const trendlineType: string[] = [];

const periods: Object[] = [
  {
    text: '1H',
    interval: 1,
    intervalType: 'Hours',
    selected: true
  },
  {
    text: 'All'
  }
];

const enableCustomRange: boolean = false;

const lastValueLabel: Object = {
  enable: true,
  background: '#e74c3d',
  dashArray: '3,2',
  lineWidth: 1,
  font: {
    color: '#ffffff',
    size: '11px'
  }
};

const stockData = ref<StockData[]>([]);

let updateTimer: number | null = null;
let updateIndex: number = 0;

/**
 * Returns a random number between the given minimum and maximum.
 */
function randomBetween(minimum: number, maximum: number): number {
  return minimum + Math.random() * (maximum - minimum);
}

/**
 * Rounds the given value to two decimal places.
 */
function correctFloat(value: number): number {
  return Number(value.toFixed(2));
}

/**
 * Returns the timestamp representing the start of the current minute.
 */
function getCurrentMinute(): number {
  return Math.floor(Date.now() / ONE_MINUTE_MS) * ONE_MINUTE_MS;
}

/**
 * Builds a single historical OHLCV candle.
 */
function createHistoricalCandle(
  timestamp: number,
  openingPrice: number
): StockData {
  const movement: number = randomBetween(-1.5, 1.5);

  const close: number = correctFloat(
    Math.max(1, openingPrice + movement)
  );

  const high: number = correctFloat(
    Math.max(openingPrice, close) + randomBetween(0.05, 0.7)
  );

  const low: number = correctFloat(
    Math.max(
      1,
      Math.min(openingPrice, close) - randomBetween(0.05, 0.7)
    )
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
 * Populates stockData with historical candles ending at the
 * start of the current minute.
 */
function createInitialLocalData(): void {
  const currentMinute: number = getCurrentMinute();

  const startingTime: number =
    currentMinute - (INITIAL_CANDLE_COUNT - 1) * ONE_MINUTE_MS;

  let price: number = INITIAL_PRICE;
  const initialData: StockData[] = [];

  for (
    let index: number = 0;
    index < INITIAL_CANDLE_COUNT;
    index++
  ) {
    const timestamp: number =
      startingTime + index * ONE_MINUTE_MS;

    const candle: StockData =
      createHistoricalCandle(timestamp, price);

    initialData.push(candle);
    price = candle.close;
  }

  stockData.value = initialData;
}

/**
 * Returns the StockSeries instance that exposes
 * setData and addPoint.
 */
function getCandleSeries(): any {
  const stockChart: any =
    stockChartRef.value?.ej2Instances || stockChartRef.value;

  if (
    stockChart &&
    stockChart.series &&
    stockChart.series.length > 0 &&
    typeof stockChart.series[0].setData === 'function' &&
    typeof stockChart.series[0].addPoint === 'function'
  ) {
    return stockChart.series[0];
  }

  return null;
}

/**
 * Builds an updated version of the currently forming candle.
 */
function createUpdatedCandle(
  currentCandle: StockData
): StockData {
  const movement: number = correctFloat(
    randomBetween(-1.5, 1.5)
  );

  const newClose: number = correctFloat(
    Math.max(1, currentCandle.close + movement)
  );

  return {
    x: currentCandle.x,
    open: currentCandle.open,
    high: correctFloat(
      Math.max(currentCandle.high, newClose)
    ),
    low: correctFloat(
      Math.min(currentCandle.low, newClose)
    ),
    close: newClose,
    volume:
      currentCandle.volume +
      Math.round(randomBetween(10, 100))
  };
}

/**
 * Builds the next one-minute candle.
 */
function createNewCandle(
  previousCandle: StockData
): StockData {
  const openingPrice: number = previousCandle.close;

  return {
    x: new Date(
      previousCandle.x.getTime() + ONE_MINUTE_MS
    ),
    open: openingPrice,
    high: openingPrice,
    low: openingPrice,
    close: openingPrice,
    volume: Math.round(randomBetween(1000, 5000))
  };
}

/**
 * Replaces the currently forming candle.
 */
function updateCurrentPoint(candle: StockData): void {
  const series: any = getCandleSeries();

  if (!series) {
    return;
  }

  series.setData(candle, UPDATE_ANIMATION_DURATION);
}

/**
 * Appends a new one-minute candle.
 */
function addNewPoint(candle: StockData): void {
  const series: any = getCandleSeries();

  if (!series) {
    return;
  }

  series.addPoint(candle, ADD_ANIMATION_DURATION);
}

/**
 * Updates the forming candle or appends a new candle.
 */
function processDynamicUpdate(): void {
  if (!stockData.value.length) {
    return;
  }

  const lastIndex: number = stockData.value.length - 1;
  const currentCandle: StockData = stockData.value[lastIndex];

  const shouldAddNewCandle: boolean =
    updateIndex > 0 &&
    updateIndex % UPDATES_PER_CANDLE === 0;

  if (shouldAddNewCandle) {
    const newCandle: StockData =
      createNewCandle(currentCandle);

    stockData.value.push(newCandle);
    addNewPoint(newCandle);
  } else {
    const updatedCandle: StockData =
      createUpdatedCandle(currentCandle);

    stockData.value[lastIndex] = updatedCandle;
    updateCurrentPoint(updatedCandle);
  }

  updateIndex++;
}

/**
 * Starts the simulated live update loop.
 */
function startDynamicUpdates(): void {
  if (updateTimer !== null) {
    return;
  }

  updateTimer = window.setInterval(
    processDynamicUpdate,
    UPDATE_INTERVAL_MS
  );
}

/**
 * Stops the simulated live update loop.
 */
function stopDynamicUpdates(): void {
  if (updateTimer !== null) {
    window.clearInterval(updateTimer);
    updateTimer = null;
  }
}

/**
 * Starts updates after the Stock Chart is loaded.
 */
function onChartLoaded(): void {
  startDynamicUpdates();
}

createInitialLocalData();

onBeforeUnmount((): void => {
  stopDynamicUpdates();
});

provide('stockChart', [
  DateTime,
  CandleSeries,
  LastValueLabel
]);
</script>

<style>
#stockchartcontainer {
  display: block;
  height: 455px;
}
</style>