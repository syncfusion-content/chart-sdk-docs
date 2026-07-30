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
            dataSource: stackedData, xName: 'x', yName: 'y', opacity: 0.1, border: {width:1.5},
            //Series type as stacked area series
            type: 'StackingStepArea', name: 'Organic',  noRisers: true
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',opacity: 0.1, border: {width:1.5},
            type: 'StackingStepArea', name: 'Others',  noRisers: true
        }
    ],
    title: 'Trend in Sales of Ethical Produce'
}, '#element');