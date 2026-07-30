


import { Chart, ColumnSeries, LineSeries, DataLabel, StripLine } from '@syncfusion/ej2-charts';
import { stripData } from './datasource.ts';
Chart.Inject(ColumnSeries, LineSeries, DataLabel, StripLine);

let chart: Chart = new Chart({
    primaryXAxis: {
        stripLines:[
            { startFromAxis: true, size: 4, zIndex: 'Behind', opacity: 0.5}
        ]
    },
    series:[{
        dataSource: stripData,
        xName: 'x', yName: 'y',
        type: 'Column',
}]
}, '#element');



