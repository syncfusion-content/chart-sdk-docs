


import { CircularChart3D, PieSeries3D, CircularChartLegend3D } from '@syncfusion/ej2-charts';
CircularChart3D.Inject(PieSeries3D, CircularChartLegend3D);
let circularchart: CircularChart3D = new CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Saudi Arabia', y: 58 },
                { x: 'Persian Gulf', y: 15 },
                { x: 'Canada', y: 13 },
                { x: 'Venezuela', y: 8 },
                { x: 'Mexico', y: 3 },
                { x: 'Russia', y: 2 },
                { x: 'Miscellaneous', y: 1 }
            ],
            xName: 'x',
            yName: 'y'
        }
    ],
    tilt: -45,
    title: 'Oil and other liquid imports in USA',
    subTitle : 'In the year 2014 - 2015',
    legendSettings: {
        visible: false
    }
}, '#element');



