


import { Chart, StepLineSeries, DateTime, Tooltip } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(StepLineSeries, DateTime, Tooltip);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 20,
        interval: 4
    },
    series: [
        {
            type: 'StepLine',
            dataSource: chartData, xName: 'x', yName: 'y',
            width: 2, name: 'China',
            marker: {
                visible: true, width: 10, height: 10
            },
        }],
    title: 'Unemployment Rates 1975-2010',
    //Default tooltip for chart
    tooltip: { enable: true, location: { x: 120, y: 20 } }
}, '#element');



