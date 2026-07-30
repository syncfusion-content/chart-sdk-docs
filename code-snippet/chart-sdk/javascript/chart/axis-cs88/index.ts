


import { Chart, LineSeries } from '@syncfusion/ej2-charts';
import { numericData } from './datasource.ts';
Chart.Inject(LineSeries);
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Double',
        // Set the rangePadding as auto in X Axis
        rangePadding: 'Auto'
    },
    primaryYAxis: {
        valueType: 'Double',
        // Set the rangePadding as auto in Y Axis
        rangePadding: 'Auto'
    },
    series:[{
        dataSource: numericData,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



