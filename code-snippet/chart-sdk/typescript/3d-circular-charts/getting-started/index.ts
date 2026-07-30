


import { CircularChart3D, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from '@syncfusion/ej2-charts';
CircularChart3D.Inject(PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D);
let circularchart: CircularChart3D = new CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Chrome', y: 62.92 },
                { x: 'Internet Explorer', y: 6.12 },
                { x: 'Opera', y: 3.15 },
                { x: 'Edge', y: 5.5 },
                { x: 'Safari', y: 19.97 },
                { x: 'Others', y: 2.34 }
            ],
            xName: 'x',
            yName: 'y',
            dataLabel: {
                visible: true,
                name: 'x',
                position: 'Outside',
                font: {
                    fontWeight: '600'
                },
                connectorStyle: { length: '40px' }
            }
        }
    ],
    tilt: -45,
    title: 'Browser Market Shares in November 2023',
    legendSettings: {
        visible: true,
        position: 'Right'
    }
}, '#element');



