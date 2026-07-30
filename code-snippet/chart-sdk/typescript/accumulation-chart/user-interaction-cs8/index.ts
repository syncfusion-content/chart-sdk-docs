


import {  Tooltip, Crosshair, DateTime } from '@syncfusion/ej2-charts';
import { Chart, LineSeries, Legend } from '@syncfusion/ej2-charts';
import { trackData } from './datasource.ts';
Chart.Inject(LineSeries, DateTime, Tooltip, Crosshair, Legend);
let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'DateTime',
        },
        series: [
            {
                dataSource: trackData, name: 'John', xName: 'x',
                marker: { visible: true },
                type: 'Line', width: 2,
                yName: 'y'
            },
            {
                dataSource: trackData, name: 'Andrew', xName: 'x',
                marker: { visible: true },
                type: 'Line', width: 2,
                yName: 'y1'
            },
            {
                dataSource: trackData, name: 'Thomas', xName: 'x',
                marker: { visible: true },
                type: 'Line', width: 2,
                yName: 'y2'
            },
            {
                dataSource: trackData, name: 'Mark', xName: 'x',
                marker: { visible: true },
                type: 'Line', width: 2,
                yName: 'y3'
            },
            {
                dataSource: trackData, name: 'William', xName: 'x',
                marker: { visible: true },
                type: 'Line', width: 2,
                yName: 'y4'
            }
        ],
        // trackball for chart
        tooltip: { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' },
        crosshair: { enable: true, lineType: 'Vertical' },
        title: 'Average Sales per Person'
}, '#element');



