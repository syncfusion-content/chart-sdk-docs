import { Chart, SplineSeries, Category } from '@syncfusion/ej2-charts';
import { splineData } from './datasource.ts';
Chart.Inject(SplineSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        minimum: -5, 
        maximum: 30, 
        interval: 5,
        title: 'Temperature in Celsius',
        labelFormat: '{value}°C'
    },
    series:[{
        dataSource: splineData,
        xName: 'x', yName: 'y',
        type: 'Spline'
    }],
    title: 'Climate Graph-2012'
}, '#element');