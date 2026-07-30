


import { Chart, Category, ColumnSeries, LineSeries } from '@syncfusion/ej2-charts';
import { smartAxisData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, LineSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        // label intersect as 45
        labelIntersectAction: 'Rotate45'
    },
   series:[{
        dataSource: smartAxisData,
        xName: 'x', yName: 'y',
        type: 'Column'
    }],

}, '#element');



