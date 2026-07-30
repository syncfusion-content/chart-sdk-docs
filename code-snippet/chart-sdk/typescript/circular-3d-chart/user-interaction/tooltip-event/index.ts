


import { CircularChart3D, PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D, CircularChart3DTooltipRenderEventArgs } from '@syncfusion/ej2-charts';
CircularChart3D.Inject(PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D);
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
    tooltip: { enable: true },
    legendSettings: {
        visible: false
    },
    tooltipRender: (args: CircularChart3DTooltipRenderEventArgs) => {
        if (args.point.index === 3) {
            args.text = args.point.x + '' + ':' + args.point.y + '' + ' ' +'customtext';
            args.textStyle!.color = '#f48042';
        }
    }
}, '#element');



