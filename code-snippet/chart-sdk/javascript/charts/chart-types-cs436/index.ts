import { Chart, BarSeries, Category, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(BarSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: 2005, 
        maximum: 2012, 
        interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 3, 
        maximum: 12,
        interval: 1, 
        title: 'Percentage',
        labelFormat: '{value}%'
    },
   series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        // Series type as bar series
        type: 'Bar'
    }],
    title: 'Unemployment rate (%)',
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.y < 7.5) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}, '#element');



