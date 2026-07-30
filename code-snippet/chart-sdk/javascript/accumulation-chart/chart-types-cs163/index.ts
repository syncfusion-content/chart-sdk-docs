


import { Chart, SplineSeries, Category, PolarSeries } from '@syncfusion/ej2-charts';
Chart.Inject(SplineSeries, Category, PolarSeries);
import { polarCategory } from './datasource.ts';


let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series:[{
        dataSource: polarCategory,
        xName: 'x', yName: 'y',
        // Series type as Polar series
        type: 'Polar'
        // Series draw type as spline
        drawType: 'Spline'
    }],
}, '#element');



