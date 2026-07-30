


import { StockChart } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
import { DateTime, HiloOpenCloseSeries, CandleSeries } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, Trendlines, SmaIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-charts';
import { TmaIndicator, RangeTooltip, Tooltip, Crosshair}
  from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime, HiloOpenCloseSeries, CandleSeries);
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(Trendlines, TmaIndicator, RangeTooltip, Tooltip, Crosshair, Export);

 let stockChart: StockChart = new StockChart({
        series: [
            {
                dataSource: chartData, type: 'Candle',
                animation: { enable: true },
                bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
            }
        ],
        });
    stockChart.appendTo("#element");



