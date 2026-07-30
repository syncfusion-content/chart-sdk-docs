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
  width: '1100px',
  height: '455px',
  primaryXAxis: {
    majorGridLines: {
      width: 0
    },
  },
  primaryYAxis: {
    majorGridLines: {
      width: 0
    },
    interval: 10
  },
  series: [
    {
      dataSource: chartData,
      xName: 'x',
      radialGradient: {
        cx: 0.5, cy: 0.5, r: 0.5,
        fx: 0.5, fy: 0.5,
        gradientColorStop: [
          { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
          { color: '#7C3AED', offset: 100, opacity: 1, lighten: 0, brighten: 0 },
        ]
      }
    }
  ],
  title: 'AAPL Stock Price',
});
stockChart.appendTo('#element');


