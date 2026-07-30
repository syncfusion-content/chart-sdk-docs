import { Chart, StackingAreaSeries, DateTime, Legend, DataLabel } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingAreaSeries, DateTime, Legend, DataLabel);

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
            type: 'StackingArea', name: 'Organic', marker:{dataLabel : {visible : true}},
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingArea', name: 'Fair-trade', marker:{dataLabel : {visible : true}},
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingArea', name: 'Veg Alternatives', marker:{dataLabel : {visible : true}},
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingArea', name: 'Others', marker:{dataLabel : {visible : true}},
        }
    ],
    stackLabels: { visible: true, fill: 'rgba(0, 123, 255, 0.5)', format: '{value}', angle: 45, rx: 10, ry: 10, margin: { left: 10, right: 10, top: 10, bottom: 10 }, border: { width: 2, color: '#000' }, font: { size: '14px', color: '#fff', weight: 'bold', family: 'Arial', textAlignment: 'Left' } },
    title: 'Trend in Sales of Ethical Produce'
}, '#element');