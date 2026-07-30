


import { Chart, ColumnSeries } from '@syncfusion/ej2-charts';
import { groupingData } from './datasource.ts';
Chart.Inject(ColumnSeries);

let chart: Chart = new Chart({
    series:[{
        dataSource: groupingData,
        xName: 'x', yName: 'y',
        type: 'Column'
    }],
useGroupingSeparator: true
}, '#element');



