<template>
  <div class="control-section" style="padding: 5%;">
    <ejs-stockchart
      id="stockchartcontainer"
      ref="stockChartRef"
      role="img"
      aria-label="Stock Chart with live data updates using addPoint and setData"
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

<script lang="ts">
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
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

const ONE_MINUTE_MS: number = 60 * 1000;
const UPDATE_INTERVAL_MS: number = 100;
const UPDATES_PER_CANDLE: number = 10;
const UPDATE_ANIMATION_DURATION: number = 0;
const ADD_ANIMATION_DURATION: number = 300;
const INITIAL_CANDLE_COUNT: number = 120;
const INITIAL_PRICE: number = 375;

export default {
  name: 'App',

  components: {
    'ejs-stockchart': StockChartComponent,
    'e-stockchart-series-collection':
      StockChartSeriesCollectionDirective,
    'e-stockchart-series':
      StockChartSeriesDirective
  },

  data() {
    return {
      width: '1100px',
      height: '455px',
      title: 'Live Stock Data',
      theme: 'Material',

      chartArea: {
        border: {
          width: 0
        }
      },

      primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'HH:mm'
      },

      primaryYAxis: {
        labelPosition: 'Outside'
      },

      seriesType: [] as string[],
      indicatorType: [] as string[],
      trendlineType: [] as string[],

      periods: [
        {
          text: '1H',
          interval: 1,
          intervalType: 'Hours',
          selected: true
        },
        {
          text: 'All'
        }
      ],

      enableCustomRange: false,

      lastValueLabel: {
        enable: true,
        background: '#e74c3d',
        dashArray: '3,2',
        lineWidth: 1,
        font: {
          color: '#ffffff',
          size: '11px'
        }
      },

      stockData: [] as StockData[],
      updateTimer: null as number | null,
      updateIndex: 0
    };
  },

  created(): void {
    this.createInitialLocalData();
  },

  beforeUnmount(): void {
    this.stopDynamicUpdates();
  },

  methods: {
    randomBetween(
      minimum: number,
      maximum: number
    ): number {
      return minimum + Math.random() * (maximum - minimum);
    },

    correctFloat(value: number): number {
      return Number(value.toFixed(2));
    },

    getCurrentMinute(): number {
      return (
        Math.floor(Date.now() / ONE_MINUTE_MS) *
        ONE_MINUTE_MS
      );
    },

    createHistoricalCandle(
      timestamp: number,
      openingPrice: number
    ): StockData {
      const movement: number =
        this.randomBetween(-1.5, 1.5);

      const close: number = this.correctFloat(
        Math.max(1, openingPrice + movement)
      );

      const high: number = this.correctFloat(
        Math.max(openingPrice, close) +
        this.randomBetween(0.05, 0.7)
      );

      const low: number = this.correctFloat(
        Math.max(
          1,
          Math.min(openingPrice, close) -
          this.randomBetween(0.05, 0.7)
        )
      );

      return {
        x: new Date(timestamp),
        open: this.correctFloat(openingPrice),
        high: high,
        low: low,
        close: close,
        volume: Math.round(
          this.randomBetween(1000, 5000)
        )
      };
    },

    createInitialLocalData(): void {
      const currentMinute: number =
        this.getCurrentMinute();

      const startingTime: number =
        currentMinute -
        (INITIAL_CANDLE_COUNT - 1) * ONE_MINUTE_MS;

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
          this.createHistoricalCandle(
            timestamp,
            price
          );

        initialData.push(candle);
        price = candle.close;
      }

      this.stockData = initialData;
    },

    getCandleSeries(): any {
      const component: any =
        this.$refs.stockChartRef;

      const stockChart: any =
        component?.ej2Instances || component;

      if (
        stockChart &&
        stockChart.series &&
        stockChart.series.length > 0 &&
        typeof stockChart.series[0].setData ===
          'function' &&
        typeof stockChart.series[0].addPoint ===
          'function'
      ) {
        return stockChart.series[0];
      }

      return null;
    },

    createUpdatedCandle(
      currentCandle: StockData
    ): StockData {
      const movement: number = this.correctFloat(
        this.randomBetween(-1.5, 1.5)
      );

      const newClose: number = this.correctFloat(
        Math.max(
          1,
          currentCandle.close + movement
        )
      );

      return {
        x: currentCandle.x,
        open: currentCandle.open,
        high: this.correctFloat(
          Math.max(
            currentCandle.high,
            newClose
          )
        ),
        low: this.correctFloat(
          Math.min(
            currentCandle.low,
            newClose
          )
        ),
        close: newClose,
        volume:
          currentCandle.volume +
          Math.round(
            this.randomBetween(10, 100)
          )
      };
    },

    createNewCandle(
      previousCandle: StockData
    ): StockData {
      const openingPrice: number =
        previousCandle.close;

      return {
        x: new Date(
          previousCandle.x.getTime() +
          ONE_MINUTE_MS
        ),
        open: openingPrice,
        high: openingPrice,
        low: openingPrice,
        close: openingPrice,
        volume: Math.round(
          this.randomBetween(1000, 5000)
        )
      };
    },

    updateCurrentPoint(candle: StockData): void {
      const series: any =
        this.getCandleSeries();

      if (!series) {
        return;
      }

      series.setData(
        candle,
        UPDATE_ANIMATION_DURATION
      );
    },

    addNewPoint(candle: StockData): void {
      const series: any =
        this.getCandleSeries();

      if (!series) {
        return;
      }

      series.addPoint(
        candle,
        ADD_ANIMATION_DURATION
      );
    },

    processDynamicUpdate(): void {
      if (!this.stockData.length) {
        return;
      }

      const lastIndex: number =
        this.stockData.length - 1;

      const currentCandle: StockData =
        this.stockData[lastIndex];

      const shouldAddNewCandle: boolean =
        this.updateIndex > 0 &&
        this.updateIndex %
          UPDATES_PER_CANDLE ===
          0;

      if (shouldAddNewCandle) {
        const newCandle: StockData =
          this.createNewCandle(
            currentCandle
          );

        this.stockData.push(newCandle);
        this.addNewPoint(newCandle);
      } else {
        const updatedCandle: StockData =
          this.createUpdatedCandle(
            currentCandle
          );

        this.stockData[lastIndex] =
          updatedCandle;

        this.updateCurrentPoint(
          updatedCandle
        );
      }

      this.updateIndex++;
    },

    startDynamicUpdates(): void {
      if (this.updateTimer !== null) {
        return;
      }

      this.updateTimer = window.setInterval(
        (): void => {
          this.processDynamicUpdate();
        },
        UPDATE_INTERVAL_MS
      );
    },

    stopDynamicUpdates(): void {
      if (this.updateTimer !== null) {
        window.clearInterval(
          this.updateTimer
        );

        this.updateTimer = null;
      }
    },

    onChartLoaded(): void {
      this.startDynamicUpdates();
    }
  },

  provide: {
    stockChart: [
      DateTime,
      CandleSeries,
      LastValueLabel
    ]
  }
};
</script>

<style>
#stockchartcontainer {
  display: block;
  height: 455px;
}
</style>