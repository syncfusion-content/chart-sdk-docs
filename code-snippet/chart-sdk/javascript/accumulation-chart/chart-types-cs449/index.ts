import { Chart, HiloSeries, Category, ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(HiloSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
    },
    primaryYAxis:
    {
        labelFormat: '{value}mm',
        edgeLabelPlacement: 'Shift',
        title: 'Rainfall'
    },
    series:[
        {
            dataSource: chartData,
            xName: 'x', high: 'high', low: 'low',
            //Series type as Hilo
            type: 'Hilo'
        }
    ],
    title: 'Maximum and Minimum Rainfall',
    seriesRender: (args: ISeriesRenderEventArgs) => {
        args.fill = '#ff6347';
    }
}, '#element');