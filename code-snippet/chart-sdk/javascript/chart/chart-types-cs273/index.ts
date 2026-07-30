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
            emptyPointSettings: { mode: 'Gap' }
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingStepArea', name: 'Fair-trade'
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingStepArea', name: 'Others',
            marker: { visible: true, width: 7, height: 7, isFilled: true },
            emptyPointSettings: { mode: 'Average', fill: 'red', border: { width: 2, color: 'green'} }
        }
    ],
    title: 'Trend in Sales of Ethical Produce'
}, '#element');