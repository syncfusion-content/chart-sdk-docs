import { Chart, StackingAreaSeries, PolarSeries } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingAreaSeries, PolarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        minimum: 2000,
        maximum: 2009,
        interval: 1,
        majorTickLines: { width: 0 },
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis:
    {
        title: 'Spend in Billions',
        minimum: 0,
        maximum: 4,
        interval: 1,
        majorTickLines: { width: 0 },
        labelFormat: '{value}B'
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            // Series type as polar series
            type: 'Polar', name: 'Organic',
            //Series draw type as stacked area series
            drawType: 'StackingArea'
        }, {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'Polar', name: 'Fair-trade',
            drawType: 'StackingArea'
        }, {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'Polar', name: 'Veg Alternatives',
            drawType: 'StackingArea'
        },
    ],
    title: 'Trend in Sales of Ethical Produce'
}, '#element');



