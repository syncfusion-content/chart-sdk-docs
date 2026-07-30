import { Chart, ColumnSeries, Double, Legend, Tooltip, Highlight } from '@syncfusion/ej2-charts';
import { polandData, vietnamData } from './datasource.ts';
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
            dataSource: polandData,
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 5,
                height: 5,
                shape: 'Rectangle',
                isFilled: true
            },
            yName: 'y', name: 'Poland',
        }
    ],
    tooltip: {
        enable: true,
        distance: 20
    },
});
chart.appendTo('#element');