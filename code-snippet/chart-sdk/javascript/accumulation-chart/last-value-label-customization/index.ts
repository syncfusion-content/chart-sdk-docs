

import {
    Chart, LineSeries, ColumnSeries, Legend, Category, Tooltip, DataLabel, LastValueLabel
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, ColumnSeries, Category, Legend, Tooltip, DataLabel, LastValueLabel);

let chartData: Object[] = [
     { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 40 }
 ];

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year',
        interval: 1
    },
    primaryYAxis: {
 
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    width: '90%',
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'series1',
        marker: { visible: false, dataLabel: { visible: true } },
        type: 'Column', animation: { enable: true },
        lastValueLabel: { enable: true, background: "blue", lineColor: "red", lineWidth: 2, dashArray: "5,5", rx: 10, ry: 10, border: { width: 2, color: "red" }, font: { color: "white", size: "12px", fontWeight: "bold" } }
    }],
 
    tooltip: { enable: true },
 
    title: 'Efficiency of oil-fired power production'
}, '#element');


