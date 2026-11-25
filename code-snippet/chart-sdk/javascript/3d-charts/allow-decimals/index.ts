import { Chart3D, ColumnSeries3D, Category3D } from '@syncfusion/ej2-charts';

Chart3D.Inject(ColumnSeries3D, Category3D);

let data: Object[] = [
    { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
    { x: 'Thu', y: 4 }, { x: 'Fri', y: 5 }
];

let chart: Chart3D = new Chart3D({
    primaryXAxis: { valueType: 'Category' },
    primaryYAxis: {
        title: 'Orders',
        allowDecimals: false
    },
    series: [{ dataSource: data, xName: 'x', yName: 'y', type: 'Column' }]
}, '#element');