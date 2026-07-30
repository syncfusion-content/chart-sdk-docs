


import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
import { stripData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        crossesAt : 5
    },
    series:[{
        dataSource: stripData,
        xName: 'x', yName: 'y',
        type: 'Column'
    }]
}, '#element');