


import { Chart, DateTime, LineSeries, Logarithmic } from '@syncfusion/ej2-charts';
import { logData } from './datasource.ts';
Chart.Inject(LineSeries, DateTime, Logarithmic);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
    },
    primaryYAxis: {
        //Logarithmic scale range in primary X Axis
        valueType: 'Logarithmic',
        minimum: 100,
        maximum: 10000
    },
    series:[{
        dataSource: logData,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



