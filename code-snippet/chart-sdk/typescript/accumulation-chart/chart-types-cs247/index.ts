import { Chart, StackingAreaSeries, DateTime, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingAreaSeries, DateTime, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        title: 'Years',
        intervalType: 'Years',
        labelFormat: 'y',
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Temperature (%)',
        labelFormat: '{value}%',
        rangePadding: 'None'
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            //Series type as 100% stacked area series
            type: 'StackingArea100', name: 'USA',
            border: { width: 2, color: '#ff4251', dashArray: '5,5' }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingArea100', name: 'UK',
            border: { width: 2, color: '#4C4C4C', dashArray: '5,5' }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingArea100', name: 'Canada',
            border: { width: 2, color: '#794F1B', dashArray: '5,5' }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingArea100', name: 'China',
            border: { width: 2, color: '#1a9a6f', dashArray: '5,5' }
        }
    ],
    title: 'Annual Temperature Comparison'
}, '#element');