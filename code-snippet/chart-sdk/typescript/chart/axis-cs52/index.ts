


import { Chart, Category, ColumnSeries } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category);
let chartData: Object[] = [
    { x: 'Jan', y: 60 }, { x: 'Feb', y: 50 }, { x: 'Mar', y: 64 },
    { x: 'Apr', y: 63 }, { x: 'May', y: 81 }, { x: 'Jun', y: 64 },
    { x: 'Jul', y: 82 }, { x: 'Aug', y: 96 }, { x: 'Sep', y: 78 },
    { x: 'Oct', y: 60 }, { x: 'Nov', y: 58 }, { x: 'Dec', y: 56 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis: {
        title: 'Temperature (Fahrenheit)',
        //Axis position as opposite
        opposedPosition: true
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Sales', type: 'Column'
    }],
    title: 'Temperature flow over months'
}, '#element');



