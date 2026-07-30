import { Chart, MultiColoredAreaSeries } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(MultiColoredAreaSeries);

let chart: Chart = new Chart({
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
    }]
}, '#element');