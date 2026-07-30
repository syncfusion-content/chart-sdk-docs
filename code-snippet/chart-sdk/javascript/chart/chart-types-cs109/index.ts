import { Chart, SplineSeries, Category, PolarSeries } from '@syncfusion/ej2-charts';
Chart.Inject(SplineSeries, Category, PolarSeries);
import { polarCategory } from './datasource.ts';

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
    },
    primaryYAxis: {
        minimum: -5, maximum: 25, interval: 5,
        title: 'Temperature in Celsius',
        labelFormat: '{value}°C'
    },
    series:[{
        dataSource: polarCategory,
        xName: 'x', yName: 'y',
        // Series type as Polar series
        type: 'Polar', width: 2,
        // Series draw type as spline
        drawType: 'Spline'
    }],
    title: 'Climate Graph - 2012'
}, '#element');



