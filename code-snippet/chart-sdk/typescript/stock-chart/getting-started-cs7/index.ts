


import { StockChart } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
import { DateTime, LineSeries } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, Trendlines, SmaIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-charts';
import { TmaIndicator, RangeTooltip, Tooltip, Crosshair}
  from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime, LineSeries);
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(Trendlines, TmaIndicator, RangeTooltip, Tooltip, Crosshair, Export);

 let stockChart: StockChart = new StockChart({
        series: [
            {
                dataSource: chartData, type: 'Line', xName: 'date' yName: 'high'
            },
            {
                dataSource: chartData, type: 'Line', xName: 'date' yName: 'low'
                 yAxisName: 'yAxis',
            }
        ],
         // Initializing multiple axis
       axes:[
        {
            rowIndex: 0,
            name: 'yAxis',
        }
       ],
        crosshair: {
            enable: true
        },
        title: 'Multiple Axis',

    });

stockChart.appendTo('#element');



