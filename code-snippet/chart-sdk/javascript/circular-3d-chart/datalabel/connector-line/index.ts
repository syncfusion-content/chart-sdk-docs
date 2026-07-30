


import { CircularChart3D, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from '@syncfusion/ej2-charts';
CircularChart3D.Inject(PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D);
let circularchart: CircularChart3D = new CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 13, text: 'Jan: 13' }, 
                { x: 'Feb', y: 13, text: 'Feb: 13' },
                { x: 'Mar', y: 17, text: 'Mar: 17' }, 
                { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }
            ],
            xName: 'x',
            yName: 'y',
            dataLabel: {
                visible: true,
                name: 'text',
                position: 'Outside',
                connectorStyle: {
                    length: '50px',
                    width: 2,                  
                    color: '#f4429e',
                    dashArray: '5,3'
                }
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    }
}, '#element');



