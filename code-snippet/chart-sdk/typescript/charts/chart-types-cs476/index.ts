import { AccumulationChart, AccumulationTooltip, PieSeries, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationTooltip, PieSeries, AccumulationLegend);
let accChart: AccumulationChart = new AccumulationChart({
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
    tooltip: { enable: true, enableHighlight: true },
    legendSettings: { visible: false }
}, '#element');