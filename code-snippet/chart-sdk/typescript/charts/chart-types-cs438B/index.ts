import { Chart, StackingBarSeries, Category, Legend, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
    },
    primaryYAxis:
    {
        title: 'Percentage (%)',
        minimum: -20,
        maximum: 100,
        labelFormat: '{value}%',
        edgeLabelPlacement: 'Shift'
    },
    series: [
        {
            //Series type as stacked bar
            type: 'StackingBar', name: 'Apple',
            dataSource: stackedData, xName: 'x', yName: 'y'
        }, {
            type: 'StackingBar', name: 'Orange',
            dataSource: stackedData, xName: 'x', yName: 'y1'
        }, {
           type: 'StackingBar', name: 'Wastage',
            dataSource: stackedData, xName: 'x', yName: 'y2'
        }
    ],
    title: 'Sales Comparison',
    pointRender: (args: IPointRenderEventArgs) => {
        if (args.point.index === 1 && args.point.series.index === 1) {
            args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
        }
        if (args.point.index === 4 && args.point.series.index === 1) {
            args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
        }
        if (args.point.index === 6 && args.point.series.index === 1) {
            args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
        }
        if (args.point.index === 8 && args.point.series.index === 1) {
            args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
        }
    }
}, '#element');