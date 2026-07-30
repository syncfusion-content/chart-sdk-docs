


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
                template:  "<div id='templateWrap' style='background-color:#bd18f9;border-radius: 3px; float: right;padding: 2px;line-height: 20px;text-align: center;'>"+ "<img src='https://ej2.syncfusion.com/demos/src/chart/images/sunny.png' />" + "<div style='color:white; font-family:Roboto; font-style: medium; fontp-size:14px;float: right;padding: 2px;line-height: 20px;text-align: center;padding-right:6px'><span>${point.y}</span></div></div>"
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    }
}, '#element');



