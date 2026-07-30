import { Chart, ColumnSeries, Double, Legend, Tooltip, Highlight } from '@syncfusion/ej2-charts';
import { franceData, mexicoData, vietnamData } from './datasource.ts';
Chart.Inject(ColumnSeries, Double, Legend, Tooltip, Highlight);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Double',
    },
    primaryYAxis:
    {
        title: 'Volume in million metric tons',
        labelFormat: '{value}',
    },
    series: [
        {
            type: 'Column',
            dataSource: vietnamData,
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 7,
                height: 7,
                shape: 'Circle',
                isFilled: true
            },
            yName: 'y', name: 'Vietnam',
        },
        {
            type: 'Column',
            dataSource: franceData,
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 7,
                height: 7,
                shape: 'Diamond',
                isFilled: true
            },
            yName: 'y', name: 'France',
        },
        {
            type: 'Column',
            dataSource: mexicoData,
            xName: 'x', width: 2, marker: {
                visible: true,
            },
            yName: 'y', name: 'Mexico',
        }
    ],
    tooltip: {
        enable: true,
        followPointer: true
    },
});
chart.appendTo('#element');