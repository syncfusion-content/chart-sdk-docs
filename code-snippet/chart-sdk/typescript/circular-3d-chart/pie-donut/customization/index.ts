


import { CircularChart3D, PieSeries3D, CircularChartLegend3D } from '@syncfusion/ej2-charts';
import { CircularChart3DPointRenderEventArgs } from '@syncfusion/ej2/charts';
CircularChart3D.Inject(PieSeries3D, CircularChartLegend3D);
let circularchart: CircularChart3D = new CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 3 }, 
                { x: 'Feb', y: 3.5 },
                { x: 'Mar', y: 7 }, 
                { x: 'Apr', y: 13.5 }
            ],
            xName: 'x',
            yName: 'y'
        }
    ],
    tilt: -45,
    legendSettings: { visible: false },
    pointRender: (args: CircularChart3DPointRenderEventArgs) => {
        if ((args.point.x as string).indexOf('Apr') > -1) {
            args.fill = '#f4bc42';
        }
        else if ((args.point.x as string).indexOf('Mar') > -1) {
            args.fill = '#DE3D8A';
        }
        else if ((args.point.x as string).indexOf('Feb') > -1) {
            args.fill = '#F7523F';
        }
        else {
            args.fill = '#597cf9';
        }
    }
}, '#element');



