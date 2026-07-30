import { Chart, LineSeries, Double, Legend, Tooltip, Highlight, Category } from '@syncfusion/ej2-charts';
import { franceData, indonesiaData, mexicoData, polandData, vietnamData } from './datasource.ts';
Chart.Inject(LineSeries, Double, Legend, Tooltip, Highlight, Category);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category' }, legendSettings: { visible: true }, primaryYAxis: { title: 'Value' },
    series: [
        {
            type: 'Line',
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
            type: 'Line',
            dataSource: indonesiaData,
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 5,
                height: 5,
                shape: 'Rectangle',
                isFilled: true
            },
            yName: 'y', name: 'Indonesia',
        },
        {
            type: 'Line',
            dataSource: franceData,
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 5,
                height: 5,
                shape: 'Rectangle',
                isFilled: true
            },
            yName: 'y', name: 'France',
        },
        {
            type: 'Line',
            dataSource: polandData,
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 5,
                height: 5,
                shape: 'Rectangle',
                isFilled: true
            },
            yName: 'y', name: 'Poland',
        },
        {
            type: 'Line',
            dataSource: mexicoData,
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 5,
                height: 5,
                shape: 'Rectangle',
                isFilled: true
            },
            yName: 'y', name: 'Mexico',
        }
    ],
    tooltip: {
        enable: true,
        split: true
    },
});
chart.appendTo('#element');