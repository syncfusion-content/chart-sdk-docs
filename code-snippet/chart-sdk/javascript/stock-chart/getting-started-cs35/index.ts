


import { StockChart } from '@syncfusion/ej2-charts';
import { DateTime,AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries ,Logarithmic } from '@syncfusion/ej2-charts';
import { SplineAreaSeries, SplineSeries  } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, Trendlines, SmaIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-charts';
import { TmaIndicator, RangeTooltip, Tooltip, Crosshair, IStockChartEventArgs, ChartTheme } from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime,Logarithmic,  AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineAreaSeries, SplineSeries );
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(Trendlines, TmaIndicator, RangeTooltip, Tooltip, Crosshair, Export);
import { chartData } from './datasource.ts';

let stockChart: StockChart = new StockChart({
        primaryXAxis: {
            valueType: 'DateTime',
        },
        series: [
            {
                type: 'Candle', width: 2,
                dataSource: chartData,
            }
        ],
        //crosshair for chart
        crosshair: { enable: true },
        title: 'Weather Condition'
});
stockChart.appendTo("#element");



