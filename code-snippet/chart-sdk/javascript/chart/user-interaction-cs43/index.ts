import { Chart, AreaSeries, Legend, Zoom, DateTime, ScrollBar } from '@syncfusion/ej2-charts';
import { series1 } from './datasource.ts';
Chart.Inject(AreaSeries, DateTime, Legend, Zoom, ScrollBar);
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        zoomFactor: 0.2, 
        zoomPosition: 0.6,
        scrollbarSettings: {
            enable: true,
            enableZoom: false,
            height: 14,
            trackRadius: 8,
            scrollbarRadius: 8,
            gripColor: 'transparent',
            trackColor: 'yellow',
            scrollbarColor: 'red'
        }
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
        enableScrollbar: true,
        mode: 'X'
    },
    title: 'Sales History of Product X',
    legendSettings: { visible: false },
}, '#element');