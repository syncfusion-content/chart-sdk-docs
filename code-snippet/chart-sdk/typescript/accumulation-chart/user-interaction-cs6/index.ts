


import { Chart, LineSeries, Crosshair, DateTime, Legend } from '@syncfusion/ej2-charts';
import { series1 } from './datasource.ts';
Chart.Inject(LineSeries, DateTime, Crosshair, Legend);
let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
        },
        primaryYAxis:
        {
            crosshairTooltip: { enable: true }
        },
        series: [
            {
                type: 'Line', width: 2, name: 'Temperature',
                dataSource: series1, xName: 'x', yName: 'y'
            }
        ],
        //crosshair for chart
        crosshair: { enable: true },
        legendSettings: { visible: true },
        title: 'Weather Condition'
}, '#element');



