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
            border: { width: 2, color: '#ff4251', dashArray: '5,5' }
        },
        {
            type: 'StackingBar',
            name: 'Orange',
            dataSource: stackedData,
            xName: 'x',
            yName: 'y1',
            border: { width: 2, color: '#66BDB7', dashArray: '5,5' }
        },
        {
            type: 'StackingBar',
            name: 'Wastage',
            dataSource: stackedData,
            xName: 'x',
            yName: 'y2',
            border: { width: 2, color: '#794F1B', dashArray: '5,5' }
        }
    ],
    title: 'Sales Comparison'
}, '#element');



