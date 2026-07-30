import { Chart, LineSeries, PolarSeries } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(LineSeries, PolarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 2005, 
        maximum: 2011, 
        interval: 1
    },
    primaryYAxis: {
        minimum: 0, 
        maximum: 40, 
        interval: 10,
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        //Series type as polar
        type: 'Polar', width: 2,
        // Series draw type as line
        drawType: 'Line',
        emptyPointSettings: {
            mode: 'Zero'
        }
    }],
    title: 'Efficiency of oil-fired power production'
}, '#element');