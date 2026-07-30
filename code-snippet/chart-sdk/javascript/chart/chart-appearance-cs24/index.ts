import { Chart, ColumnSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0, 
        maximum: 80,
        interval: 20, 
        title: 'Medals'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'country', yName: 'gold',
            name: 'Gold', type: 'Column',
            border: { width: 2, color: 'grey' }
        }
    ],
    title: 'Olympic Medals',
    legendSettings: { visible: false },
    chartArea: {
        border: { width: 2, color: 'blue' },
        // margin of the chart area
        margin: { left: 50, right: 50, top: 50, bottom: 50 }
    },
    border: { width: 2, color: 'green' }
}, '#element');
