


import { CircularChart3D, PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D, CircularChartHighlight3D } from '@syncfusion/ej2-charts';
CircularChart3D.Inject(PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D, CircularChartHighlight3D);
let circularchart: CircularChart3D = new CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 13 }, 
                { x: 'Feb', y: 13 },
                { x: 'Mar', y: 17 }, 
                { x: 'Apr', y: 13.5 }
            ],
            xName: 'x',
            yName: 'y'
        }
    ],
    tilt: -45,
    tooltip: { 
        enable: true,
        format: '${series.name} ${point.x} : ${point.y}',
        fill: '#7bb4eb',
        border: {
            width: 2,
            color: 'grey'
        }
    },
    highlightColor: 'red',
    highlightMode: 'Point',
    legendSettings: {
        visible: false
    }
}, '#element');



