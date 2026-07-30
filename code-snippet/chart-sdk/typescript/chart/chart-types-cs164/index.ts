


import { Chart, AreaSeries, PolarSeries } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(AreaSeries, PolarSeries);

let chart: Chart = new Chart({
    series:[{
        dataSource: numData,
        xName: 'x', yName: 'y',
        // Series type as polar series
        type: 'Polar'
        // Series draw type as area
        drawType: 'Area'
    }],
}, '#element');



