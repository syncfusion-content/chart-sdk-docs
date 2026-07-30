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
            fill: 'url(#gradient1)'
        },
        {
            type: 'StackingBar',
            name: 'Orange',
            dataSource: stackedData,
            xName: 'x',
            yName: 'y1',
            fill: 'url(#gradient2)'
        },
        {
            type: 'StackingBar',
            name: 'Wastage',
            dataSource: stackedData,
            xName: 'x',
            yName: 'y2',
            fill: 'url(#gradient3)'
        }
    ],
    title: 'Sales Comparison'
}, '#element');



