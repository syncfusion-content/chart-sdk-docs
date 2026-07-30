import { Chart, StackingAreaSeries, DateTime, Legend, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingAreaSeries, DateTime, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        valueType: 'DateTime',
        intervalType: 'Years',
        labelFormat: 'y',
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 }
    },
    primaryYAxis:
    {
        title: 'Spend in Billions',
        minimum: 0,
        maximum: 7,
        interval: 1,
        labelFormat: '{value}B',
        majorTickLines: { width: 0 }
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            //Series type as stacked area series
            type: 'StackingArea', name: 'Organic',
            marker: { visible: true }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingArea', name: 'Fair-trade',
            marker: { visible: true }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingArea', name: 'Veg Alternatives',
            marker: { visible: true }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingArea', name: 'Others',
            marker: { visible: true }
        }
    ],
    title: 'Trend in Sales of Ethical Produce',
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}, '#element');