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
            marker: { visible: true, width: 7, height: 7, isFilled: true },
            emptyPointSettings: { mode: 'Zero', fill: 'red', border: { width: 2, color: 'green' } }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingArea100', name: 'UK',
            marker: { visible: true, width: 7, height: 7, isFilled: true }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingArea100', name: 'Canada',
            marker: { visible: true, width: 7, height: 7, isFilled: true },
            emptyPointSettings: { mode: 'Average', fill: 'red', border: { width: 2, color: 'green' } }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingArea100', name: 'China',
            marker: { visible: true, width: 4, height: 4, isFilled: true }
        }
    ],
    title: 'Annual Temperature Comparison'
}, '#element');