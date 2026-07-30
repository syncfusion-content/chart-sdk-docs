import { Chart, ColumnSeries, Legend, Tooltip } from '@syncfusion/ej2-charts';
import { ParetoSeries, Category, LineSeries, Highlight } from '@syncfusion/ej2-charts';
import { paretoData } from './datasource.ts';
import { Browser } from '@syncfusion/ej2-base';
Chart.Inject(ColumnSeries, Category, ParetoSeries, LineSeries, Legend, Tooltip, Highlight);

/**
 * Sample for Pareto chart
 */

let chart: Chart = new Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        interval: 1,
        valueType: 'Category',
        majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
        lineStyle: { width: 0 }, labelIntersectAction: 'Rotate45'
    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        title: 'Frequency of Occurence',
        minimum: 0,
        maximum: 25,
        interval: 5,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
        minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Pareto',
            dataSource: paretoData,
            xName: 'x', yName: 'y', name: 'Defect', width: 2, opacity: 0.75, columnWidth: 0.4,
            paretoOptions: {
                marker: { visible: true, isFilled: true, width: 7, height: 7 },
                fill: '#F7523F',
                width: 2,
                showAxis: false
            },
            cornerRadius: { topLeft: Browser.isDevice ? 4 : 6, topRight: Browser.isDevice ? 4 : 6 }
        }
    ],
    //Initializing Chart title
    title: 'Defects in Shirts',
    legendSettings: { visible: true, enableHighlight: true },
    //Initializing User Interaction
    tooltip: {
        enable: true,
        shared: true,
        format: '${series.name} : <b>${point.y}</b>'
    }
});
chart.appendTo('#element');