import { Chart, Category, ColumnSeries } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category);

let chartData: Object[] = [
    { Country: 'USA', Count: 46 },
    { Country: 'UK', Count: 27 },
    { Country: 'China', Count: 26 },
    { Country: 'Russia', Count: 19 },
    { Country: 'Germany', Count: 17 }
];

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        labelTemplate: '#AxisLabelTemplate'
    },
    primaryYAxis: {
        valueType: 'Double'
    },
    series: [{
        dataSource: chartData, type: 'Column',
        xName: 'Country', yName: 'Count',
        marker: {
            visible: true
        }
    }],
    title: 'Olympic Medals',
    width: '70%'
});
chart.appendTo('#container');



