


import { Chart, ColumnSeries, LineSeries, StripLine } from '@syncfusion/ej2-charts';
import { stripData } from './datasource.ts';
Chart.Inject(ColumnSeries, LineSeries, StripLine);

let chart: Chart = new Chart({
    primaryXAxis: {
        stripLines:[
            { startFromAxis: true, size: 4, zIndex: 'Behind', opacity: 0.5,  text: 'Good', verticalAlignment: 'Middle', horizontalAlignment: 'Middle', rotation: 90, textStyle: { size: 15}},
            { start: 5, end: 8, verticalAlignment: 'Start', horizontalAlignment: 'End', rotation: 45, text: 'Poor'}
        ]
    },
   series:[{
        dataSource: stripData,
        xName: 'x', yName: 'y',
        type: 'Column',
     }],
},'#element');



