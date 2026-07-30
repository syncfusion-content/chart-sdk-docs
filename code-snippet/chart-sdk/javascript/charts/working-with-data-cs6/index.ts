


import { Chart, ColumnSeries, LineSeries Category } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, LineSeries, Category);
let chartData: Object[] = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: null }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: undefined },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series:[{
        dataSource: chartData,
        xName: 'month',
        yName: 'sales',
        type: 'Column',
        emptyPointSettings: {
            mode: 'Average',
            fill: 'green',
            border: { color: 'black', width: 2}
        }
    },
    {
        dataSource: chartData,
        xName: 'month',
        yName: 'sales',
        type: 'Line',
        marker: { visible: true},
        emptyPointSettings: {
            mode: 'Zero',
            fill: 'pink'
        }
    }]
}, '#element');



