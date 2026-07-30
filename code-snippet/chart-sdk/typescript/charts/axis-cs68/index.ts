


import { Chart, DateTimeCategory, LineSeries } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
Chart.Inject(LineSeries, DateTimeCategory);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTimeCategory',
        //interval type as years in primary x axis
        intervalType: 'Years'
    },
    series:[{
        dataSource: data,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



