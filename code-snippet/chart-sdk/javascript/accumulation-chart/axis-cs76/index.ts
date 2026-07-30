


import { Chart, DateTime, LineSeries, Logarithmic } from '@syncfusion/ej2-charts';
import { logData } from './datasource.ts';
Chart.Inject(LineSeries, DateTime, Logarithmic);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
    },
    primaryYAxis: {
        valueType: 'Logarithmic',
        // logBase for logarithmic scale
        logBase: 2
    },
    series:[{
        dataSource: logData,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



