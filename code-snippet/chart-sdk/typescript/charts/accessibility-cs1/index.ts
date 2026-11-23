import { Chart, ColumnSeries, Category, Legend, Tooltip } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, Legend, Tooltip);

let chartData: Object[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis: {
        labelFormat: '${value}K'
    },
    series: [
        {
            dataSource: chartData,
            type: 'Column',
            xName: 'month',
            yName: 'sales',
            name: 'Sales'
        }
    ],
    title: 'Monthly Sales',
    tooltip: { enable: true },
    legendSettings: { visible: true },
    // Customize the chart's accessibility attributes and visible focus border.
    accessibility: {
        accessibilityDescription: 'A column chart showing monthly sales in thousands of units for the year.',
        accessibilityRole: 'chart'
    },
    focusBorderColor: '#0066FF',
    focusBorderWidth: 2,
    focusBorderMargin: 3
}, '#element');
