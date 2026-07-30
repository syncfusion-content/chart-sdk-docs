import { Chart, StackingBarSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
    },
    primaryYAxis: {
        title: 'Percentage (%)',
        minimum: -20,
        maximum: 100,
        labelFormat: '{value}%',
        edgeLabelPlacement: 'Shift'
    },
    series: [
        {
            //Series type as stacked bar
            type: 'StackingBar',
            name: 'Apple',
            dataSource: stackedData,
            xName: 'x',
            yName: 'y',
            fill: '#483D8B'
        },
        {
            type: 'StackingBar',
            name: 'Orange',
            dataSource: stackedData,
            xName: 'x',
            yName: 'y1',
            fill: '#556B2F'
        },
        {
            type: 'StackingBar',
            name: 'Wastage',
            dataSource: stackedData,
            xName: 'x',
            yName: 'y2',
            fill: '#8B0000'
        }
    ],
    title: 'Sales Comparison'
}, '#element');



