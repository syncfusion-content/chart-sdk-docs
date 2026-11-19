import { Chart, LineSeries } from '@syncfusion/ej2-charts';
import { lineData } from './datasource.js';

Chart.Inject(LineSeries);

const chart = new Chart({
    primaryXAxis: {
        interval: 1
    },
    primaryYAxis: {
        title: 'Expense'
    },
    series: [
        {
            dataSource: lineData,
            type: 'Line',
            xName: 'x',
            yName: 'y'
        }
    ],
    title: 'Efficiency of oil-fired power production'
});

chart.appendTo('#element');