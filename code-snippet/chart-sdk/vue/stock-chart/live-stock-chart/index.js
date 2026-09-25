import Vue from 'vue';

import {
  StockChartPlugin,
  DateTime,
  CandleSeries,
  LastValueLabel
} from '@syncfusion/ej2-vue-charts';

Vue.use(StockChartPlugin);

/**
 * Simulated one-minute candle in milliseconds.
 */
const ONE_MINUTE_MS = 60 * 1000;

/**
 * Tick frequency for updating the chart.
 */
const UPDATE_INTERVAL_MS = 100;

/**
 * Number of updates before adding a new candle.
 */
const UPDATES_PER_CANDLE = 10;

/**
 * Animation duration for updating the current candle.
 */
const UPDATE_ANIMATION_DURATION = 0;

/**
 * Animation duration for adding a new candle.
 */
const ADD_ANIMATION_DURATION = 300;

/**
 * Number of initial candles.
 */
const INITIAL_CANDLE_COUNT = 120;

/**
 * Initial stock price.
 */
const INITIAL_PRICE = 375;

new Vue({
  el: '#app',

  template: `
    <div
      class="control-section"
      style="padding: 5%;"
    >
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
  `,

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

      seriesType: [],
      indicatorType: [],
      trendlineType: [],

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

      stockData: [],
      updateTimer: null,
      updateIndex: 0
    };
  },

  created() {
    this.createInitialLocalData();
  },

  beforeDestroy() {
    this.stopDynamicUpdates();
  },

  methods: {
    randomBetween(minimum, maximum) {
      return (
        minimum +
        Math.random() * (maximum - minimum)
      );
    },

    correctFloat(value) {
      return Number(value.toFixed(2));
    },

    getCurrentMinute() {
      return (
        Math.floor(Date.now() / ONE_MINUTE_MS) *
        ONE_MINUTE_MS
      );
    },

    createHistoricalCandle(
      timestamp,
      openingPrice
    ) {
      const movement =
        this.randomBetween(-1.5, 1.5);

      const close = this.correctFloat(
        Math.max(1, openingPrice + movement)
      );

      const high = this.correctFloat(
        Math.max(openingPrice, close) +
        this.randomBetween(0.05, 0.7)
      );

      const low = this.correctFloat(
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

    createInitialLocalData() {
      const currentMinute =
        this.getCurrentMinute();

      const startingTime =
        currentMinute -
        (INITIAL_CANDLE_COUNT - 1) *
        ONE_MINUTE_MS;

      let price = INITIAL_PRICE;
      const initialData = [];

      for (
        let index = 0;
        index < INITIAL_CANDLE_COUNT;
        index++
      ) {
        const timestamp =
          startingTime +
          index * ONE_MINUTE_MS;

        const candle =
          this.createHistoricalCandle(
            timestamp,
            price
          );

        initialData.push(candle);
        price = candle.close;
      }

      this.stockData = initialData;
    },

    getCandleSeries() {
      const component =
        this.$refs.stockChartRef;

      const stockChart =
        component &&
        component.ej2Instances
          ? component.ej2Instances
          : component;

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

    createUpdatedCandle(currentCandle) {
      const movement = this.correctFloat(
        this.randomBetween(-1.5, 1.5)
      );

      const newClose = this.correctFloat(
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

    createNewCandle(previousCandle) {
      const openingPrice =
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

    updateCurrentPoint(candle) {
      const series =
        this.getCandleSeries();

      if (!series) {
        return;
      }

      series.setData(
        candle,
        UPDATE_ANIMATION_DURATION
      );
    },

    addNewPoint(candle) {
      const series =
        this.getCandleSeries();

      if (!series) {
        return;
      }

      series.addPoint(
        candle,
        ADD_ANIMATION_DURATION
      );
    },

    processDynamicUpdate() {
      if (!this.stockData.length) {
        return;
      }

      const lastIndex =
        this.stockData.length - 1;

      const currentCandle =
        this.stockData[lastIndex];

      const shouldAddNewCandle =
        this.updateIndex > 0 &&
        this.updateIndex %
          UPDATES_PER_CANDLE ===
          0;

      if (shouldAddNewCandle) {
        const newCandle =
          this.createNewCandle(
            currentCandle
          );

        this.stockData.push(newCandle);
        this.addNewPoint(newCandle);
      } else {
        const updatedCandle =
          this.createUpdatedCandle(
            currentCandle
          );

        this.$set(
          this.stockData,
          lastIndex,
          updatedCandle
        );

        this.updateCurrentPoint(
          updatedCandle
        );
      }

      this.updateIndex++;
    },

    startDynamicUpdates() {
      if (this.updateTimer !== null) {
        return;
      }

      this.updateTimer = window.setInterval(
        () => {
          this.processDynamicUpdate();
        },
        UPDATE_INTERVAL_MS
      );
    },

    stopDynamicUpdates() {
      if (this.updateTimer !== null) {
        window.clearInterval(
          this.updateTimer
        );

        this.updateTimer = null;
      }
    },

    onChartLoaded() {
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
});