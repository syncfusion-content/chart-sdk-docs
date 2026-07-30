


import { Chart, AreaSeries, Legend, Zoom, DateTime } from '@syncfusion/ej2-charts';
import { series1 } from './datasource.ts';
Chart.Inject(AreaSeries, DateTime, Legend, Zoom);
let chart: Chart = new Chart({
    chartArea : {border : {width : 0}},
    primaryXAxis: {
        title: 'Years',
        valueType: 'DateTime',
        labelFormat: 'yMMM',
        edgeLabelPlacement: 'Shift',
        majorGridLines : { width : 0 }
    },
    primaryYAxis:
    {
        title: 'Profit ($)',
        rangePadding: 'None',
        lineStyle : { width: 0 },
        majorTickLines : {width : 0}
    },
    series: [
        {
            type: 'Area',
            dataSource: series1,
            name: 'Product X',
            xName: 'x',
            yName: 'y',
            border: { width: 0.5, color: '#00bdae' },
            animation: { enable: false }
        },
    ],
    zoomSettings:
    {
        enableSelectionZooming: true,
        //toolbar items for zooming toolkit
        toolbarItems: ['Zoom', 'Pan', 'Reset'],
        showToolbar: true,
        toolbarPosition: {
            y: -10,
            draggable: true,
            horizontalAlignment: "Far",
            verticalAlignment: "Top"
        }
    },
    title: 'Sales History of Product X',
    legendSettings: { visible: false },
}, '#element');



