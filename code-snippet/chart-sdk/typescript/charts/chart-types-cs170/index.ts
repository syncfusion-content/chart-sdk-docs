


import { Chart, LineSeries, RadarSeries } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(LineSeries, RadarSeries);

let chart: Chart = new Chart({
    series:[{
        dataSource: numData, xName: 'x', yName: 'y',
        //Series type as polar
        type: 'Radar',
        // Series draw type as line
        drawType: 'Line'
    }],
}, '#element');



