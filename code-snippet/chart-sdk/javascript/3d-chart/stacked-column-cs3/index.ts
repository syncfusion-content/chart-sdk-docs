import {Chart3D, Category3D, Legend3D, StackingColumnSeries3D, Tooltip3D, Highlight3D, Chart3DLoadedEventArgs } from '@syncfusion/ej2-charts';
Chart3D.Inject(StackingColumnSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D);

let chartData: Object[] = [
    { x: '2013', y: 9628912, y1: 4298390, y2: 2842133, y3: 2006366 },
    { x: '2014', y: 9609326, y1: 4513769, y2: 3016710, y3: 2165566 },
    { x: '2015', y: 7485587, y1: 4543838, y2: 3034081, y3: 2279503 },
    { x: '2016', y: 7793066, y1: 4999266, y2: 2945295, y3: 2359756 },
    { x: '2017', y: 6856880, y1: 5235842, y2: 3302336, y3: 2505741 }
];
let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        valueType: 'Category',
    },
    primaryYAxis:
    {
        interval: 25
    },
    series: [
        {
            dataSource: chartData, xName: 'x', yName: 'y',
            type: 'StackingColumn100',
            fill: 'red',
            name: 'General Motors'
        }, {
            dataSource: chartData, xName: 'x', yName: 'y1',
            type: 'StackingColumn100', fill: 'green', name: 'Honda'
        }, {
            dataSource: chartData, xName: 'x', yName: 'y2',
            type: 'StackingColumn100', fill: 'yellow', name: 'Suzuki'
        }
    ],
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100,
    wallColor: 'transparent',
}, '#element');



