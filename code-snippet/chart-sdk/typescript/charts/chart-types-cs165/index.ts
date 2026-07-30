


import { Chart, StackingAreaSeries, Category, PolarSeries } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingAreaSeries, Category, PolarSeries);
let chart: Chart = new Chart({
        series: [
            {
                dataSource: stackedData, xName: 'x', yName: 'y',
                // Series type as polar series
                type : 'Polar',
                //Series draw type as stacked area series
                drawType: 'StackingArea',
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y1',
                type : 'Polar',
                drawType: 'StackingArea',
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y2',
                type : 'Polar',
                drawType: 'StackingArea',
            },
        ],
}, '#element');



