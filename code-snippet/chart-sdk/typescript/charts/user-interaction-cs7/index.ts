


import { Chart, LineSeries, Crosshair, DateTime, Legend } from '@syncfusion/ej2-charts';
import { series1 } from './datasource.ts';
Chart.Inject(LineSeries, DateTime, Crosshair, Legend);
let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'DateTime',
            crosshairTooltip: { enable: true, fill: 'green' },
        },
        primaryYAxis:
        {
            crosshairTooltip: { enable: true, fill: 'green' },
        },
        series: [
            {
                type: 'Line', width: 2, name: 'Temperature',
                dataSource: series1, xName: 'x', yName: 'y'
            }
        ],
        crosshair: {
            enable: true,
            // customizing crosshair
            line: {width: 2, color: 'green'} },
        legendSettings: { visible: true },
        title: 'Weather Condition'
}, '#element');



