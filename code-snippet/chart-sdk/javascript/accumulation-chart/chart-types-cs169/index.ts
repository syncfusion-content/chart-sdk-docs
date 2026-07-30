


import { Chart, ScatterSeries, Legend, Category, PolarSeries } from '@syncfusion/ej2-charts';
import { polarCategory } from './datasource.ts';
Chart.Inject(ScatterSeries, Legend, Category, PolarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series:[{
        dataSource: polarCategory,
        xName: 'x', yName: 'y',
        // Series type as Polar series
        type: 'Polar'
        // Series draw type as scatter
        drawType: 'Scatter'
    }],
}, '#element');



