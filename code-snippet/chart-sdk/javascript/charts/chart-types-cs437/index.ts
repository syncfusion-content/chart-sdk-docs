import { Chart, StackingBarSeries, Category, Legend, ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
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
    seriesRender: (args: ISeriesRenderEventArgs) => {
        if (args.series.index === 0) {
            args.fill = '#ff4251';
        }
        else if (args.series.index === 1) {
            args.fill = '#4C4C4C';
        }
        else if (args.series.index === 2) {
            args.fill = '#794F1B';
        }
    }
}, '#element');