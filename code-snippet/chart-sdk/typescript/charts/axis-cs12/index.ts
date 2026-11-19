import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';

Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        // Customize label style
        labelStyle: {
            color: '#1f77b4',
            fontFamily: 'Arial',
            size: '14px',
            fontWeight: 'bold'
        },
        title: 'Quarters'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 40,
        interval: 10,
        title: 'Sales Value'
    },
    series: [{
        dataSource: [
            { x: 'Q1', y: 35 },
            { x: 'Q2', y: 28 },
            { x: 'Q3', y: 34 },
            { x: 'Q4', y: 32 }
        ],
        xName: 'x',
        yName: 'y',
        name: 'Quarterly Sales',
        type: 'Column'
    }],
    title: 'Labels Customization - Label Style'
}, '#element');

chart.appendTo('#element');
