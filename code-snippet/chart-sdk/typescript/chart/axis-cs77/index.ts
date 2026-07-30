


import { Chart, DateTime, LineSeries, Logarithmic } from '@syncfusion/ej2-charts';
import { logData } from './datasource.ts';
Chart.Inject(LineSeries, DateTime, Logarithmic);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
    },
    primaryYAxis: {
        //Logarithmic interval in primary X Axis
        valueType: 'Logarithmic',
        interval: 2
    },
    series:[{
        dataSource: logData,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



