


import { CircularChart3D, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from '@syncfusion/ej2-charts';
CircularChart3D.Inject(PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D);
let circularchart: CircularChart3D = new CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Belgium', y: 551500, r: '110.7' },
                { x: 'Cuba', y: 312685, r: '124.6' },
                { x: 'Dominican Republic', y: 350000, r: '137.5' },
                { x: 'Egypt', y: 301000, r: '150.8' },
                { x: 'Kazakhstan', y: 300000, r: '155.5' },
                { x: 'Somalia', y: 357022, r: '160.6' },
                { x: 'Argentina', y: 505370, r: '100' }
            ],
            xName: 'x',
            yName: 'y',
            radius: 'r',
            dataLabel: {
                visible: true, position: 'Outside',
                name: 'x'
            },
            innerRadius: '20%'
        }
    ],
    tilt: -15,
    title: 'Countries compared by population density and total area',
    legendSettings: { visible: true },
    enableAnimation: true
}, '#element');



