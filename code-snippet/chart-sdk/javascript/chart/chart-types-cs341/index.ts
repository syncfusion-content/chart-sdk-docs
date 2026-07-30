import { Chart, StackingBarSeries } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Months'
    },
    primaryYAxis:
    {
        title: 'Percentage (%)',
        labelFormat: '{value}%'
    },
    series: [
        {
            //Series type as 100% stacked bar
            type: 'StackingBar100',
            dataSource: stackedData, 
            xName: 'x', 
            yName: 'y',
            name: 'Apple'
        }, 
        {
            type: 'StackingBar100',
            dataSource: stackedData, 
            xName: 'x', 
            yName: 'y1',
            name: 'Orange'
        }, 
        {
            type: 'StackingBar100',
            dataSource: stackedData, 
            xName: 'x', 
            yName: 'y2',
            name: 'Wastage'
        }
    ],
    title: 'Sales Comparison'
}, '#element');