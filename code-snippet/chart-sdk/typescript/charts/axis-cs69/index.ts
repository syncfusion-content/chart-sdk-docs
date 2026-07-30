


import { Chart, DateTime, LineSeries } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
Chart.Inject(LineSeries, DateTime);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        //Range padding as none
        rangePadding: 'None'
    },
    series:[{
        dataSource: data,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



