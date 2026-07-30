


import { DateTime, ILoadedEventArgs, ChartTheme, ScrollBar } from '@syncfusion/ej2-charts';
import { Chart, AreaSeries, Legend, Zoom } from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';
Chart.Inject(AreaSeries, DateTime, Legend, Zoom, ScrollBar);

let series1: Object[] = [];
let point1: Object;
let value: number = 80;
let i: number;
for (i = 1; i < 50; i++) {
    if (Math.random() > .5) {
        value += Math.random();
    } else {
        value -= Math.random();
    }
    point1 = { x: i, y: value.toFixed(1) };
    series1.push(point1);
}
let chart: Chart = new Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        title: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        maximumLabels: 1,
    },

    //Initializing Primary Y Axis
    primaryYAxis:
    {
        title: 'Profit ($)',
        rangePadding: 'None',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }
    },
    chartArea: { border: { width: 0 } },

    series: [
        {
            type: 'Area',
            dataSource: series1,
            name: 'Product X',
            xName: 'x',
            yName: 'y',
            fill: 'url(#gradient-chart)',
            border: { width: 0.5, color: '#00bdae' },
            animation: { enable: false }
        },
    ],
    zoomSettings:
    {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        mode: 'X',
        enableScrollbar: true
    },
    title: 'Sales History of Product X',
    legendSettings: { visible: false },
}, '#element');



