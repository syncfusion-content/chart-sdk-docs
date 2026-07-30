


import { Chart, LineSeries } from '@syncfusion/ej2-charts';
import { numericData } from './datasource.ts';
Chart.Inject(LineSeries);
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Double',
    },
    primaryYAxis: {
        rangePadding: 'Normal'
    },
    series:[{
        dataSource: numericData,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



