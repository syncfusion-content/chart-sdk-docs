import { Chart, StackingColumnSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingColumnSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        interval: 1,
        valueType: 'Category'
    },
    primaryYAxis:
    {
        title: 'Sales in Billions',
        minimum: 0,
        maximum: 700,
        interval: 100,
        labelFormat: '{value}B'
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            //Series type as stacked column
            type: 'StackingColumn', name: 'UK', opacity: 0.7
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingColumn', name: 'Germany', opacity: 0.7
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingColumn', name: 'France', opacity: 0.7
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingColumn', name: 'Italy', opacity: 0.7
        }
    ],
    title: 'Mobile Game Market by Country'
}, '#element');