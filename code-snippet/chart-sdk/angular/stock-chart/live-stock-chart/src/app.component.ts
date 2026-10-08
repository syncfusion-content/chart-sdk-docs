import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ChartAllModule, StockChartAllModule, StockChartComponent, StockChartModule } from '@syncfusion/ej2-angular-charts';

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
 * The short interval is used only for demonstrating live updates.
 */
const UPDATE_INTERVAL_MS: number = 100;

/**
 * A new one-minute candle is added after this many updates.
 */
const UPDATES_PER_CANDLE: number = 10;

/**
 * Animation duration while updating the current candle.
 */
const UPDATE_ANIMATION_DURATION: number = 0;

/**
 * Animation duration while adding a new candle.
 */
const ADD_ANIMATION_DURATION: number = 300;

/**
 * Number of initial candles.
 */
const INITIAL_CANDLE_COUNT: number = 120;

/**
 * Initial stock price.
 */
const INITIAL_PRICE: number = 375;

@Component({
  imports: [StockChartModule, StockChartAllModule, ChartAllModule],
  standalone: true,
  selector: 'app-container',
  template: `
    <div class="control-section" style="padding: 5%;">
      <ejs-stockchart id="chart-container"
        #stockRef
        [width]="width"
        [height]="height"
        [title]="title"
        [theme]="theme"
        [chartArea]="chartArea"
        [primaryXAxis]="primaryXAxis"
        [primaryYAxis]="primaryYAxis"
        [series]="series"
        [seriesType]="seriesType"
        [indicatorType]="indicatorType"
        [trendlineType]="trendlineType"
        [periods]="periods"
        [enableCustomRange]="enableCustomRange"
        (loaded)="onChartLoaded()">
      </ejs-stockchart>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('stockRef')
  public stockObj!: StockChartComponent;

  public width: string = '1100px';
  public height: string = '455px';
  public title: string = 'Live Stock Data';
  public theme: string = 'Material';

  public chartArea: Object = {
    border: {
      width: 0
    }
  };

  public primaryXAxis: Object = {
    valueType: 'DateTime',
    labelFormat: 'HH:mm'
  };

  public primaryYAxis: Object = {
    labelPosition: 'Outside'
  };

  public series: Object[] = [];

  public seriesType: string[] = [];
  public indicatorType: string[] = [];
  public trendlineType: string[] = [];

  public periods: Object[] = [
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

  public enableCustomRange: boolean = false;

  private stockData: StockData[] = [];
  private updateTimer: number | null = null;
  private updateIndex: number = 0;

  public ngOnInit(): void {
    this.createInitialLocalData();

    this.series = [
      {
        dataSource: this.stockData,
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
    ];
  }

  /**
   * Starts live updates after the Stock Chart has been loaded.
   */
  public onChartLoaded(): void {
    this.startDynamicUpdates();
  }

  /**
   * Stops the timer when the Angular component is destroyed.
   */
  public ngOnDestroy(): void {
    this.stopDynamicUpdates();
  }

  /**
   * Returns a random value between the specified minimum and maximum.
   */
  private randomBetween(minimum: number, maximum: number): number {
    return minimum + Math.random() * (maximum - minimum);
  }

  /**
   * Rounds a value to two decimal places.
   */
  private correctFloat(value: number): number {
    return Number(value.toFixed(2));
  }

  /**
   * Returns the timestamp for the beginning of the current minute.
   */
  private getCurrentMinute(): number {
    return Math.floor(Date.now() / ONE_MINUTE_MS) * ONE_MINUTE_MS;
  }

  /**
   * Creates a historical OHLCV candle.
   */
  private createHistoricalCandle(
    timestamp: number,
    openingPrice: number
  ): StockData {
    const movement: number = this.randomBetween(-1.5, 1.5);

    const close: number = this.correctFloat(
      Math.max(1, openingPrice + movement)
    );

    const high: number = this.correctFloat(
      Math.max(openingPrice, close) + this.randomBetween(0.05, 0.7)
    );

    const low: number = this.correctFloat(
      Math.max(
        1,
        Math.min(openingPrice, close) - this.randomBetween(0.05, 0.7)
      )
    );

    return {
      x: new Date(timestamp),
      open: this.correctFloat(openingPrice),
      high: high,
      low: low,
      close: close,
      volume: Math.round(this.randomBetween(1000, 5000))
    };
  }

  /**
   * Creates the initial historical stock data.
   */
  private createInitialLocalData(): void {
    const currentMinute: number = this.getCurrentMinute();

    const startingTime: number =
      currentMinute - (INITIAL_CANDLE_COUNT - 1) * ONE_MINUTE_MS;

    let price: number = INITIAL_PRICE;

    this.stockData = [];

    for (
      let index: number = 0;
      index < INITIAL_CANDLE_COUNT;
      index++
    ) {
      const timestamp: number =
        startingTime + index * ONE_MINUTE_MS;

      const candle: StockData =
        this.createHistoricalCandle(timestamp, price);

      this.stockData.push(candle);
      price = candle.close;
    }
  }

  /**
   * Returns the Candle series instance that supports
   * setData and addPoint.
   */
  private getCandleSeries(): any {
    const chart: any = this.stockObj as any;

    if (
      chart &&
      chart.series &&
      chart.series.length > 0 &&
      typeof chart.series[0].setData === 'function' &&
      typeof chart.series[0].addPoint === 'function'
    ) {
      return chart.series[0];
    }

    return null;
  }

  /**
   * Creates an updated version of the currently active candle.
   */
  private createUpdatedCandle(
    currentCandle: StockData
  ): StockData {
    const movement: number = this.correctFloat(
      this.randomBetween(-1.5, 1.5)
    );

    const newClose: number = this.correctFloat(
      Math.max(1, currentCandle.close + movement)
    );

    return {
      x: currentCandle.x,
      open: currentCandle.open,
      high: this.correctFloat(
        Math.max(currentCandle.high, newClose)
      ),
      low: this.correctFloat(
        Math.min(currentCandle.low, newClose)
      ),
      close: newClose,
      volume:
        currentCandle.volume +
        Math.round(this.randomBetween(10, 100))
    };
  }

  /**
   * Creates the next candle using the previous candle's close value.
   */
  private createNewCandle(
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
      volume: Math.round(this.randomBetween(1000, 5000))
    };
  }

  /**
   * Updates the currently active candle using setData.
   */
  private updateCurrentPoint(candle: StockData): void {
    const series: any = this.getCandleSeries();

    if (!series) {
      return;
    }

    series.setData(candle, UPDATE_ANIMATION_DURATION);
  }

  /**
   * Adds a new candle using addPoint.
   */
  private addNewPoint(candle: StockData): void {
    const series: any = this.getCandleSeries();

    if (!series) {
      return;
    }

    series.addPoint(candle, ADD_ANIMATION_DURATION);
  }

  /**
   * Updates the active candle or adds a new candle.
   */
  private processDynamicUpdate = (): void => {
    if (!this.stockData.length) {
      return;
    }

    const lastIndex: number = this.stockData.length - 1;
    const currentCandle: StockData = this.stockData[lastIndex];

    const shouldAddNewCandle: boolean =
      this.updateIndex > 0 &&
      this.updateIndex % UPDATES_PER_CANDLE === 0;

    if (shouldAddNewCandle) {
      const newCandle: StockData =
        this.createNewCandle(currentCandle);

      this.stockData.push(newCandle);
      this.addNewPoint(newCandle);
    } else {
      const updatedCandle: StockData =
        this.createUpdatedCandle(currentCandle);

      this.stockData[lastIndex] = updatedCandle;
      this.updateCurrentPoint(updatedCandle);
    }

    this.updateIndex++;
  };

  /**
   * Starts the live stock update timer.
   */
  private startDynamicUpdates(): void {
    if (this.updateTimer !== null) {
      return;
    }

    this.updateTimer = window.setInterval(
      this.processDynamicUpdate,
      UPDATE_INTERVAL_MS
    );
  }

  /**
   * Stops the live stock update timer.
   */
  private stopDynamicUpdates(): void {
    if (this.updateTimer === null) {
      return;
    }

    window.clearInterval(this.updateTimer);
    this.updateTimer = null;
  }
}