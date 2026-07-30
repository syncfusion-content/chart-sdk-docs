import { Chart, AreaSeries, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(AreaSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 1900, 
        maximum: 2000, 
        interval: 10,
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        minimum: 2, 
        maximum: 5, 
        interval: 0.5,
        title: 'Sales Amount in Millions'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        marker: { visible: true },
        // Series type as area series
        type: 'Area'
    }],
    title: 'Average Sales Comparison',
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}, '#element');