import { StockChart } from '@syncfusion/ej2-charts';
import { StockDetails } from './datasource.ts';
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
    valueType: 'DateTime',
  },
  primaryYAxis: {
    interval: 10
  },
  series: [
    {
      name: 'AAPL',
      dataSource: StockDetails,
      type: 'Candle',
      xName: 'Date', high: 'High', low: 'Low', open: 'Open', close: 'Close', volume: 'Volume',
      linearGradient: {
        x1: 0, y1: 0,
        x2: 1, y2: 1,
        gradientColorStop: [
          { color: '#FF7E5F', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
          { color: '#FEB47B', offset: 100, opacity: 1, lighten: 0, brighten: 0.5 },
        ]
      }
    }
  ],
  title: 'AAPL Stock Price',
});
stockChart.appendTo('#element');


