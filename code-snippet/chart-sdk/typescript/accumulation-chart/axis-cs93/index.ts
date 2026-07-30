


import { Chart, Category, ColumnSeries, LineSeries, DataLabel, StripLine } from '@syncfusion/ej2-charts';
import { stripData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, LineSeries, DataLabel, StripLine);

let chart: Chart = new Chart({
    primaryXAxis: {
        stripLines:[
            {start: 0, end: 5 },
            {start: 5, end: 10 },
        ]
    },
   series:[{
        dataSource: stripData,
        xName: 'x', yName: 'y',
        type: 'Column'}],
},'#element');



