


import { Chart, DateTime, LineSeries} from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
Chart.Inject(DateTime, LineSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
         valueType: 'DateTime',
    },
    primaryYAxis: {
        // Custom label format
        labelFormat: '${value}K'
    },
    series:[{
        dataSource: data,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



