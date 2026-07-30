


import { Chart, Category, PolarSeries, StackingColumnSeries } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(Category, PolarSeries, StackingColumnSeries);

let chart: Chart = new Chart({
        series: [
            {
                dataSource: stackedData, xName: 'x', yName: 'y',
                type: 'Polar',
                //Series draw type as stacked column
                drawType: 'StackingColumn',
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y1',
                type: 'Polar',
                drawType: 'StackingColumn',
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y2',
                type: 'Polar',
                drawType: 'StackingColumn',

            }, {
               dataSource: stackedData, xName: 'x', yName: 'y3',
               type: 'Polar',
               drawType: 'StackingColumn',
            }
        ],
}, '#element');



