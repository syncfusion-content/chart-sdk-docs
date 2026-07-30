import { Chart, ScatterSeries, Category, PolarSeries } from '@syncfusion/ej2-charts';
import { polarCategory } from './datasource.ts';
Chart.Inject(ScatterSeries, Category, PolarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis: {
        labelFormat: '{value}°C'
    },
    series: [{
        dataSource: polarCategory,
        xName: 'x', yName: 'y',
        // Series type as Polar series
        type: 'Polar',
        // Series draw type as scatter
        drawType: 'Scatter'
    }],
    title: 'Climate Graph-2012'
}, '#element');



