import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';

Chart.Inject(ColumnSeries, Category);

let data: Object[] = [
    { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
    { x: 'Thu', y: 4 }, { x: 'Fri', y: 5 }
];

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category' },
    primaryYAxis: {
        title: 'Orders',
        allowDecimals: false
    },
    series: [{ dataSource: data, xName: 'x', yName: 'y', type: 'Column' }]
}, '#element');