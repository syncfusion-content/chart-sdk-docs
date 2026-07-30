import { Chart, LineSeries, RadarSeries, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
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
        marker: { visible: true }
    }],
    title: 'Efficiency of oil-fired power production',
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}, '#element');



