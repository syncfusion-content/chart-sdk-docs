import { Chart, HistogramSeries, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { points } from './datasource.ts';
Chart.Inject(HistogramSeries);

let chartData: Object[] = [];
points.map((value: number) => {
    chartData.push({
        y: value
    });
});
let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: 0,
        maximum: 100
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 50,
        interval: 10
    },
    series: [
        {
            dataSource: chartData,
            type: 'Histogram',
            width: 2,
            yName: 'y',
            binInterval: 20,
            showNormalDistribution: true,
            columnWidth: 0.99
        }
    ],
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.y >= 15) {
            args.fill = '#ff6347';
        } else {
            args.fill = '#009cb8';
        }
    }
}, '#element');