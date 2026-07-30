


import { Chart, LineSeries } from '@syncfusion/ej2-charts';
import { numericData } from './datasource.ts';
Chart.Inject(LineSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Double',
        // Numeric axis range
        minimum: 1,
        maximum: 20,
        interval: 5
    },
    series: [{
        dataSource: numericData,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



