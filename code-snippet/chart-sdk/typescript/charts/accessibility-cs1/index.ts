import {
    Chart, LineSeries, ColumnSeries, StripLine, Tooltip,
    Export, Legend, DataLabel, Selection, Highlight, Crosshair, Zoom
} from '@syncfusion/ej2-charts';
Chart.Inject(
    LineSeries, ColumnSeries, StripLine, Tooltip,
    Export, Legend, DataLabel, Selection, Highlight, Crosshair, Zoom
);

let chartData: Object[] = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
];

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 2004,
        maximum: 2012,
        interval: 1,
        stripLines: [{ start: 2005, end: 2008, color: 'green', opacity: 0.1, text: 'Low' }]
    },
    primaryYAxis: {
        minimum: 20,
        maximum: 40,
        interval: 5,
        title: 'Efficiency',
        labelFormat: '{value}%',
        crosshairTooltip: {
            enable: true
        }
    },
    series: [
        {
            dataSource: chartData,
            width: 2,
            xName: 'x',
            yName: 'y',
            name: 'India',
            marker: {
                visible: true,
                dataLabel: {
                    visible: true
                }
            },
            type: 'Line',
            animation: { enable: false }
        },
        {
            dataSource: chartData,
            width: 2,
            xName: 'x',
            yName: 'y',
            name: 'UK',
            marker: {
                visible: true,
                dataLabel: {
                    visible: true
                }
            },
            type: 'Column',
            animation: { enable: false }
        }
    ],
    tooltip: { enable: true },
    legendSettings: {
        visible: true,
        title: 'Country',
        shapeHeight: 10,
        shapeWidth: 10
    },
    selectionMode: 'Point',
    selectionPattern: 'DiagonalBackward',
    highlightMode: 'Cluster',
    highlightPattern: 'DiagonalBackward',
    crosshair: {
        enable: true
    },
    zoomSettings: {
        enableDeferredZooming: true,
        enableMouseWheelZooming: true,
        enableScrollbar: true,
        enablePinchZooming: true,
        mode: 'XY'
    },
    border: {
        width: 1,
        color: 'red'
    },
    title: 'Efficiency of oil-fired power production',
    subTitle: 'Graph'
}, '#element');
