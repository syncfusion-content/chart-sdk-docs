import { Chart, StepLineSeries, DateTime, Tooltip, Legend } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(StepLineSeries, DateTime, Tooltip, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        lineStyle: { width: 0 },
        labelFormat: 'y',
        intervalType: 'Years',
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Percentage (%)',
        minimum: 0, 
        maximum: 20, 
        interval: 4,
        labelFormat: '{value}%'
    },
    series: [
        {
            type: 'StepLine',
            dataSource: chartData, xName: 'x', yName: 'y',
            width: 2, name: 'China',
            marker: { visible: true, width: 10, height: 10 }
        },
        {
            type: 'StepLine',
            dataSource: chartData, xName: 'x', yName: 'y1',
            width: 2, name: 'Australia',
            marker: { visible: true, width: 10, height: 10 }
        },
        {
            type: 'StepLine',
            dataSource: chartData, xName: 'x', yName: 'y2',
            width: 2, name: 'Japan',
            marker: { visible: true, width: 10, height: 10 }
        }
    ],
    title: 'Unemployment Rates 1975-2010',
    legendSettings: { visible: true },
    tooltip: { enable: true, enableHighlight: true }
}, '#element');
