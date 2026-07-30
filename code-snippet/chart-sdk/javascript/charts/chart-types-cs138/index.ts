import { Chart, StackingBarSeries } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year',
        minimum:2006,
        maximum:2015,
        interval:1
    },
    primaryYAxis:
    {
        title: 'Sales Percentage(%)'
    },
    series: [
        {
            type: 'StackingBar', name: 'John',
            //Stacking group for stacked bar
            stackingGroup: 'JohnAndAndrew',
            dataSource: stackedData, xName: 'x', yName: 'y'
        }, 
        {
            type: 'StackingBar', name: 'Andrew', 
            stackingGroup: 'JohnAndAndrew',
            dataSource: stackedData, xName: 'x', yName: 'y1'
        }, 
        {
            type: 'StackingBar', name: 'Thomas', 
            stackingGroup: 'ThomasAndMichael',
            dataSource: stackedData, xName: 'x', yName: 'y2'
        }, 
        {
            type: 'StackingBar', name: 'Michael', 
            stackingGroup: 'ThomasAndMichael',
            dataSource: stackedData, xName: 'x', yName: 'y3'
        }
    ],
    title: 'Sales by year'
}, '#element');



