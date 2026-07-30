import { Chart, StackingBarSeries, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Months'
    },
    primaryYAxis:
    {
        title: 'Percentage (%)',
        labelFormat: '{value}%'
    },
    series: [
        {
            //Series type as 100% stacked bar
            type: 'StackingBar100',
            dataSource: stackedData, 
            xName: 'x', 
            yName: 'y',
            name: 'Apple'
        }, 
        {
            type: 'StackingBar100',
            dataSource: stackedData, 
            xName: 'x', 
            yName: 'y1',
            name: 'Orange'
        }, 
        {   cornerRadius: { topRight: 10, bottomRight: 10 },
            type: 'StackingBar100',
            dataSource: stackedData, 
            xName: 'x', 
            yName: 'y2',
            name: 'Wastage'
        }
    ],
    title: 'Sales Comparison',
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.series.index % 2 !== 0) {
            args.fill = '#ff6347';
        } 
        else {
            args.fill = '#009cb8';
        }
    }
}, '#element');