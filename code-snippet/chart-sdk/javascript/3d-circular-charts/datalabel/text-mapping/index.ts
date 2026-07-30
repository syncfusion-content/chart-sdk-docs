


import { CircularChart3D, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from '@syncfusion/ej2-charts';
CircularChart3D.Inject(PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D);
let circularchart: CircularChart3D = new CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 3, text:'January' }, 
                { x: 'Feb', y: 3.5, text: 'February' },
                { x: 'Mar', y: 7, text: 'March' }, 
                { x: 'Apr', y: 13.5, text: 'April' }
            ],
            xName: 'x',
            yName: 'y',
            dataLabel: {
                visible: true,
                name: 'text'
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    }
}, '#element');



