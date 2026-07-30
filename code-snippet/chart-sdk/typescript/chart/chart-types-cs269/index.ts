import { Chart, StackingStepAreaSeries, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingStepAreaSeries, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 }
    },
    primaryYAxis:
    {
        title: 'Spend in Billions',
        minimum: 0,
        maximum: 4,
        interval: 1,
        labelFormat: '{value}B',
        majorTickLines: { width: 0 }
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            //Series type as stacked area series
            type: 'StackingStepArea', name: 'Organic',
            border: { width: 2, color: '#ff4251', dashArray: '5,5' }
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingStepArea', name: 'Fair-trade',
            border: { width: 2, color: '#4C4C4C', dashArray: '5,5' }
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingStepArea', name: 'Others',
            border: { width: 2, color: '#794F1B', dashArray: '5,5' }
        }
    ],
    title: 'Trend in Sales of Ethical Produce'
}, '#element');