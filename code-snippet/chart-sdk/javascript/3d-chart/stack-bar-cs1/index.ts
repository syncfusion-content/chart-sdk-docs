import {Chart3D, Category3D, Legend3D, StackingBarSeries3D, Tooltip3D, Highlight3D, Chart3DLoadedEventArgs } from '@syncfusion/ej2-charts';
Chart3D.Inject(StackingBarSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D);


let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        valueType: 'Category'
    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        interval: 20
    },
    //Initializing Chart Series
    series: [
        {
            type: 'StackingBar',
            dataSource: [
                { x: 'Sochi', y: 9 },
                { x: 'Rio', y: 46 },
                { x: 'Pyeongchang', y: 9 },
                { x: 'Tokyo', y: 39 },
                { x: 'Beijing', y: 8 },
            ],
            name: 'America',
            xName: 'x',
            yName: 'y'
        },
        {
            type: 'StackingBar',
            dataSource: [
                { x: 'Sochi', y: 10 },
                { x: 'Rio', y: 4 },
                { x: 'Pyeongchang', y: 11 },
                { x: 'Tokyo', y: 7 },
                { x: 'Beijing', y: 4 },],
            name: 'Canada',
            xName: 'x',
            yName: 'y'
        },
        {
            type: 'StackingBar',
            dataSource: [
                { x: 'Sochi', y: 4 },
                { x: 'Rio', y: 10 },
                { x: 'Pyeongchang', y: 5 },
                { x: 'Tokyo', y: 10 },
                { x: 'Beijing', y: 5 },],
            name: 'France',
            xName: 'x',
            yName: 'y'
        }
    ],
    enableRotation: true,
    rotation: 22,
    depth: 100,
    legendSettings: {
        enableHighlight: true
    },
}, '#element');



