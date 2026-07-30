import { Chart, SplineAreaSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(SplineAreaSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        minimum: -5, maximum: 30, interval: 5,
        title: 'Temperature in Celsius',
        labelFormat: '{value}°C'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        // Series type as spline area series
        type: 'SplineArea',
        fill: 'blue'
    }],
    title: 'Climate Graph-2012'
}, '#element');