


import { Chart, DateTime, LineSeries, DateTimeCategory } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
Chart.Inject(LineSeries, DateTime, DateTimeCategory);

let chart: Chart = new Chart({
    primaryXAxis: {
        // Date time range in primary X Axis
        valueType: 'DateTimeCategory',
    },
    series:[{
        dataSource: data,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



