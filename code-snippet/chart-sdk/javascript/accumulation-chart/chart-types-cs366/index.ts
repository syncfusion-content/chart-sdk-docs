import { Chart, LineSeries, RadarSeries } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(LineSeries, RadarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year'
    },
    primaryYAxis: {
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    series:[{
        dataSource: chartData, xName: 'x', yName: 'y',
        //Series type as polar
        type: 'Radar', width:2,
        // Series draw type as line
        drawType: 'Line',
        marker: { visible: true, width: 7, height: 7, isFilled: true },
        emptyPointSettings: {
            mode: 'Zero',
            fill: 'red',
            border: { width: 2, color: 'blue' }
        }
    }],
    title: 'Efficiency of oil-fired power production'
}, '#element');



