import { Chart, AreaSeries, PolarSeries } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(AreaSeries, PolarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 1900, 
        maximum: 2000, 
        interval: 10
    },
    primaryYAxis: {
        minimum: 2, maximum: 5, interval: 0.5,
        title: 'Sales Amount in Millions'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        fill:'#69D2E7',
        // Series type as polar series
        type: 'Polar',
        // Series draw type as area
        drawType: 'Area'
    }],
    title: 'Average Sales Comparison'
}, '#element');