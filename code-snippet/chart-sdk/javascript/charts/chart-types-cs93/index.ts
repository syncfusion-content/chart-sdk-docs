import { Chart, LineSeries, ErrorBar } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(LineSeries, ErrorBar);

let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: 2005, 
        maximum: 2012, 
        interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 3, maximum: 12,
        interval: 1, title: 'Percentage',
        labelFormat: '{value}%'
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        errorBar: {
            visible: true
        }, 
        marker: {
            visible: true
        }, 
        animation: { enable: false },
        type: 'Line'
    }],
    title: 'Unemployment rate (%)'
}, '#element');