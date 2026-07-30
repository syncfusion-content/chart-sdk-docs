


import { Chart, LineSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Legend, Category, Tooltip, DataLabel);
let chartData: Object[] = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
let chart: Chart = new Chart({
    // Tooltip for chart
    tooltip: {
        enable: true
    },
    primaryXAxis: {
        valueType: 'Category',
    },
    primaryYAxis: {
        labelFormat: '${value}K'
    },
   series:[{
        dataSource: chartData,
        name:'Sales',
        xName: 'month',
        yName: 'sales',
        type: 'Line',
        marker: {
            // Data label for chart series
            dataLabel: {
                visible: true
            }
        }
    }],
    legendSettings: {visible: true},
    title: 'Sales Analysis'
}, '#element');



