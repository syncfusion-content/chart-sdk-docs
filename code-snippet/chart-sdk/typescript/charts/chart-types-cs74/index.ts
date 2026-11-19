import { Chart, MultiColoredAreaSeries } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(MultiColoredAreaSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 2005,
        maximum: 2011,
        interval: 1,
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        minimum: 20,
        maximum: 40,
        interval: 5,
        title: 'Sales Amount in Millions'
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        type: 'MultiColoredArea',
        segmentAxis: 'X',
        segments: [
            {
                value: 2007,
                color: 'blue'
            },
            {
                value: 2009,
                color: 'lightgreen'
            },
            {
                color: 'orange'
            }
        ]
    }],
    title: 'Average Sales Comparison'
}, '#element');