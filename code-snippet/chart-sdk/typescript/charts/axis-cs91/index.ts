


import { Chart, ColumnSeries } from '@syncfusion/ej2-charts';
import { numericData } from './datasource.ts';
Chart.Inject(ColumnSeries);

let chart: Chart = new Chart({
    primaryYAxis: {
        // Custom label format
        labelFormat: '${value}K'
    },
    series:[{
        dataSource: numericData,
        xName: 'x', yName: 'y',
        type: 'Column'
    }],

}, '#element');



