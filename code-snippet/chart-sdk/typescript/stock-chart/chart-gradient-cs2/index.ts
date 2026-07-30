import { StockChart } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
import { DateTime, CandleSeries } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, Trendlines, SmaIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-charts';
import { TmaIndicator, RangeTooltip, Tooltip, Crosshair }
  from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime, CandleSeries);
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(Trendlines, TmaIndicator, RangeTooltip, Tooltip, Crosshair, Export);

let stockChart: StockChart = new StockChart({
  primaryXAxis: {
    title: 'Months',
  },
  primaryYAxis: {
    title: 'Rupees against Dollars',
    interval: 5
  },
  tooltip: { enable: true },
  chartArea: { border: { width: 0 } },
  series: [{
    dataSource: chartData,
    name: 'Apple Inc',
    fill: '#0066FF',
    //Series type as candle
    type: 'Candle',
    trendlines: [{
      type: 'MovingAverage', enableTooltip: false, width: 2,
      linearGradient: {
        x1: 0, y1: 0,
        x2: 0, y2: 1,
        gradientColorStop: [
          { color: '#6A0DAD', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
          { color: '#FFFF00', offset: 100, opacity: 1, lighten: 0, brighten: 0 }
        ]
      }
    }]
  }],
  seriesType: [],
  indicatorType: [],
  exportType: [],
  title: 'Historical Indian Rupee Rate (INR USD)'
});
stockChart.appendTo('#element');


