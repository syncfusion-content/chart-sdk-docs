import { Chart, Category, Legend, Tooltip, StackingLineSeries, DataLabel } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(StackingLineSeries, Category, Legend, Tooltip, DataLabel);

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
            type: 'StackingLine', dataSource: chartData, marker:{dataLabel : {visible : true}},
            xName: 'x', yName: 'y', name: 'John'
        },
        {
            type: 'StackingLine', dataSource: chartData, marker:{dataLabel : {visible : true}},
            xName: 'x', yName: 'y1', name: 'Peter'
        },
        {
            type: 'StackingLine', dataSource: chartData, marker:{dataLabel : {visible : true}},
            xName: 'x', yName: 'y2', name: 'Steve'
        },
        {
            type: 'StackingLine', dataSource: chartData, marker:{dataLabel : {visible : true}},
            xName: 'x', yName: 'y3', name: 'Charle'
        }
    ],
    stackLabels: { visible: true, fill: 'rgba(0, 123, 255, 0.5)', format: '{value}', angle: 45, rx: 10, ry: 10, margin: { left: 10, right: 10, top: 10, bottom: 10 }, border: { width: 2, color: '#000' }, font: { size: '14px', color: '#fff', weight: 'bold', family: 'Arial', textAlignment: 'Left' } },
    //Initializing User Interaction Tooltip
    tooltip: {
        enable: true
    }
}, '#element');



