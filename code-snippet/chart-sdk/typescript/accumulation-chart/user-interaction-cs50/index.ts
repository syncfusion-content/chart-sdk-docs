


import {  Tooltip, Crosshair, DateTime } from '@syncfusion/ej2-charts';
import { Chart, LineSeries, Legend } from '@syncfusion/ej2-charts';
import { trackData } from './datasource.ts';
Chart.Inject(LineSeries, DateTime, Tooltip, Crosshair, Legend);
let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
        intervalType: 'Years',
        valueType: 'DateTime',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        edgeLabelPlacement: 'Shift',
    },
    primaryYAxis:
    {
        title: 'Revenue in Millions',
        labelFormat: '{value}M',
        majorTickLines: { width: 0 },
        minimum: 10, maximum: 60,
        lineStyle: { width: 0 }
    },
    series: [
        {
            dataSource: trackData, name: 'John', xName: 'x',
            marker: { visible: true },
            type: 'Line', width: 2,
            yName: 'y'
        }
    ],
    // trackball for chart
    tooltip: { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' },
    crosshair: { enable: true, lineType: 'Horizontal', snapToData: true },
    title: 'Average Sales per Person',
    legendSettings: { visible: false }
}, '#element');



