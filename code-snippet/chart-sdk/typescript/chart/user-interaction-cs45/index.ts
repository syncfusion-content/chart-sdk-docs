import { Chart, AreaSeries, LineSeries, DateTime, Tooltip, IMouseEventArgs, ITooltipRenderEventArgs, ILegendClickEventArgs } from '@syncfusion/ej2-charts';
Chart.Inject(AreaSeries, LineSeries, DateTime, Tooltip);
import { Browser } from '@syncfusion/ej2-base';
import { synchronizedData } from './datasource.ts';

let charts: Chart[] = [];

let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: new Date(2023, 1, 18),
        maximum: new Date(2023, 7, 18),
        valueType: 'DateTime',
        labelFormat: 'MMM d',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
        labelRotation: Browser.isDevice ? -45 : 0,
        interval: Browser.isDevice ? 2 : 1
    },

    primaryYAxis: {
        labelFormat: 'n2',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 0.86,
        maximum: 0.96,
        interval: 0.025
    },
    chartArea: { border: { width: 0 } },

    series: [
        {
            type: 'Line', dataSource: synchronizedData, xName: 'USD', width: 2, yName: 'EUR', emptyPointSettings: { mode: 'Drop' }
        }
    ],
    chartMouseLeave: (args: IMouseEventArgs) => {
        chart1.hideTooltip();
    },
    chartMouseMove: (args: IMouseEventArgs) => {
        if ((!Browser.isDevice && !chart.isTouch && !chart.isChartDrag) || chart.startMove) {
            chart1.startMove = chart.startMove;
            chart1.showTooltip(args.x, args.y);
        }
    },
    chartMouseUp: function (args: IMouseEventArgs) {
        if (Browser.isDevice && chart.startMove) {
            chart1.hideTooltip();
        }
    },
    title: 'US to EURO',
    titleStyle: { textAlignment: 'Near' },
    tooltip: { enable: true, fadeOutDuration: Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>€${point.y}</b> <br> ${point.x} 2023', enableMarker: false },
});
chart.appendTo('#container1');
charts.push(chart);

let chart1: Chart = new Chart({
    primaryXAxis: {
        minimum: new Date(2023, 1, 18),
        maximum: new Date(2023, 7, 18),
        valueType: 'DateTime',
        labelFormat: 'MMM d',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
        labelRotation: Browser.isDevice ? -45 : 0,
        interval: Browser.isDevice ? 2 : 1
    },
    primaryYAxis: {
        labelFormat: 'n1',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 79,
        maximum: 85,
        interval: 1.5
    },
    chartArea: { border: { width: 0 } },
    series: [
        {
            type: 'Area', dataSource: synchronizedData, xName: 'USD', width: 2, yName: 'INR', opacity: 0.6, border: { width: 2 }
        }
    ],
    chartMouseMove: (args: IMouseEventArgs) => {
        if ((!Browser.isDevice && !chart1.isTouch && !chart1.isChartDrag) || chart1.startMove) {
            chart.startMove = chart1.startMove;
            chart.showTooltip(args.x, args.y);
        }
    },
    chartMouseLeave: (args: IMouseEventArgs) => {
        chart.hideTooltip();
    },
    chartMouseUp: function (args: IMouseEventArgs) {
        if (Browser.isDevice || chart1.startMove) {
            chart.hideTooltip();
        }
    },
    title: 'US to INR',
    titleStyle: { textAlignment: 'Near' },
    tooltip: { enable: true, fadeOutDuration: Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>₹${point.y}</b> <br> ${point.x} 2023', enableMarker: false },
});
chart1.appendTo('#container2');
charts.push(chart1);