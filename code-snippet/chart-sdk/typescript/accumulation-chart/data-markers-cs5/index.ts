

import { Chart, ColumnSeries, Category, Legend, DataLabel, Tooltip, ISeriesRenderEventArgs,
ITextRenderEventArgs} from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';

Chart.Inject(ColumnSeries, DataLabel, Category, Legend, Tooltip);

let total: any = [];
let chart: Chart = new Chart({
    //Initializing Primary X and Y Axis
    primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
    },
    chartArea: { border: { width: 0 } },
    primaryYAxis: {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { color: 'transparent' },
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Column',
            xName: 'x',
            width: 2,
            yName: 'y',
            name: 'Gold',
            dataSource: [
                { x: 'USA', y: 46 },
                { x: 'GBR', y: 27 },
                { x: 'CHN', y: 26 },
            ],
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    format: 'n2'
                },
            },
        },
        {
            type: 'Column',
            xName: 'x',
            width: 2,
            yName: 'y',
            name: 'Silver',
            dataSource: [
                { x: 'USA', y: 37 },
                { x: 'GBR', y: 23 },
                { x: 'CHN', y: 18 },
            ],
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    format:'n2'
                },
            },
        },
        {
            type: 'Column',
            xName: 'x',
            width: 2,
            yName: 'y',
            name: 'Bronze',
            dataSource: [
                { x: 'USA', y: 38 },
                { x: 'GBR', y: 17 },
                { x: 'CHN', y: 26 },
            ],
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    format:'n2'
                },
            },
        },
    ],
    //Initializing Chart Title
    width: Browser.isDevice ? '100%' : '60%',
    title: 'Olympic Medal Counts - RIO',
    tooltip: { enable: true },
});
chart.appendTo('#element');




