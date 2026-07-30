import { Chart, LineSeries, Double, Legend, Tooltip, Highlight, SeriesLabel, Category } from '@syncfusion/ej2-charts';
import { franceData, indonesiaData, mexicoData, polandData, vietnamData } from './datasource.ts';
Chart.Inject(LineSeries, Double, Legend, Tooltip, Highlight, SeriesLabel, Category);

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
            labelSettings: { visible: true, text: 'Vietnam', background: '#E8F5E9', border: { width: 2, color: '#2E7D32' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#2E7D32' }, showOverlapText: true }
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
            labelSettings: { visible: true, text: 'Indonesia', background: '#E8F5E9', border: { width: 2, color: '#2E7D32' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#2E7D32' }, showOverlapText: true }
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
            labelSettings: { visible: true, text: 'France', background: '#E8F5E9', border: { width: 2, color: '#2E7D32' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#2E7D32' }, showOverlapText: true }
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
            labelSettings: { visible: true, text: 'Poland', background: '#E8F5E9', border: { width: 2, color: '#2E7D32' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#2E7D32' }, showOverlapText: true }
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
            labelSettings: { visible: true, text: 'Mexico', background: '#E8F5E9', border: { width: 2, color: '#2E7D32' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#2E7D32' }, showOverlapText: true }
        }
    ]
});
chart.appendTo('#element');