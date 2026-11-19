import { Chart, Category, PolarSeries, StackingColumnSeries } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(Category, PolarSeries, StackingColumnSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Years'
    },
    primaryYAxis: {
        minimum: 0, maximum: 4,
        interval: 1, title: 'Spend in Billions',
        labelFormat: '{value}B'
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            type: 'Polar', name: 'Organic',
            //Series draw type as stacked column
            drawType: 'StackingColumn'
        }, {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'Polar', name: 'Fair-trade',
            drawType: 'StackingColumn'
        }, {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'Polar', name: 'Veg Alternatives',
            drawType: 'StackingColumn'
        }, {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'Polar', name: 'Others',
            drawType: 'StackingColumn'
        }
    ],
    title: 'Trend in Sales of Ethical Produce'
}, '#element');



