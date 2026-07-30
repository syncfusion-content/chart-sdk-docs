import { Chart, Category, Legend, Tooltip, StackingLineSeries, ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(StackingLineSeries, Category, Legend, Tooltip);

/**
 * Sample for StackedLine Series
 */

let chart: Chart = new Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        interval: 1, 
        valueType: 'Category'
    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        title: 'Expense',
        interval: 100,
        labelFormat: '${value}'
    },
    chartArea: { border: { width: 0 } },
    //Initializing Chart Series
    series: [
        {
            type: 'StackingLine', dataSource: chartData, marker: { visible: true },
            xName: 'x', yName: 'y', name: 'John'
        },
        {
            type: 'StackingLine', dataSource: chartData, marker: { visible: true },
            xName: 'x', yName: 'y1', name: 'Peter'
        },
        {
            type: 'StackingLine', dataSource: chartData, marker: { visible: true },
            xName: 'x', yName: 'y2', name: 'Steve'
        },
        {
            type: 'StackingLine', dataSource: chartData, marker: { visible: true },
            xName: 'x', yName: 'y3', name: 'Charle'
        }
    ],
    //Initializing User Interaction Tooltip
    tooltip: {
        enable: true
    },
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
        else if (args.series.index === 3) {
            args.fill = '#1a9a6f';
        }
    }
}, '#element');