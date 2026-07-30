


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
import { trackData } from './datasource.ts';

let stockChart: StockChart = new StockChart({
        primaryXAxis: {
            valueType: 'DateTime',
        },
        series: [
            {
                dataSource: trackData, name: 'John', xName: 'x',
                 type: 'Line', width: 2,
                yName: 'y'
            },
            {
                dataSource: trackData, name: 'Andrew', xName: 'x',
                type: 'Line', width: 2,
                yName: 'y1'
            },
            {
                dataSource: trackData, name: 'Thomas', xName: 'x',
                type: 'Line', width: 2,
                yName: 'y2'
            },
            {
                dataSource: trackData, name: 'Mark', xName: 'x',
                type: 'Line', width: 2,
                yName: 'y3'
            },
            {
                dataSource: trackData, name: 'William', xName: 'x',
                type: 'Line', width: 2,
                yName: 'y4'
            }
        ],
        // trackball for chart
        tooltip: { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' },
        crosshair: { enable: true, lineType: 'Vertical' },
        title: 'Average Sales per Person'
});
stockChart.appendTo("#element");



