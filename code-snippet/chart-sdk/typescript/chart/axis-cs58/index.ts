


import { Chart, Category, ColumnSeries, LineSeries, DataLabel, StripLine } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, LineSeries, DataLabel, StripLine);
let chartData: Object[] = [
   {x: 1, y: 20},{x: 2, y: 22},{x: 3, y: 0},{x: 4, y: 12},{x: 5, y: 5},
   {x: 6, y: 15},{x: 7, y: 6},{x: 8, y: 12},{x: 9, y: 34},{x: 10, y: 7},
];
let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Overs',
        stripLines:[
            {start: 0, end: 5, text: 'powerplay 1', color: 'red', visible: true, opacity: 0.5, rotation: 45, testStyle: { size: 20, color: 'black'}},
            {start: 5, end: 10, text: 'powerplay 2', color: 'blue', visible: true, opacity: 0.5, rotation: 45, testStyle: { size: 20, color: 'black'}},
        ]
    },
    primaryYAxis: {
        title: 'Runs'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        type: 'Column',
        marker: { dataLabel: { visible: true}}
    }],
    title: 'India Vs Australia 1st match',
}, '#element');



