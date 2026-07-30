


import { Chart, ColumnSeries, DataLabel, Zoom } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, DataLabel, Zoom);
import { L10n } from '@syncfusion/ej2-base';

let chartData: Object[] = [
    { x: 1900, y: 4, y1: 2.6 }, { x: 1920, y: 3.0, y1: 2.8 },
    { x: 1940, y: 3.8, y1: 2.6 }, { x: 1960, y: 3.4, y1: 3 },
    { x: 1980, y: 3.2, y1: 3.6 }, { x: 2000, y: 3.9, y1: 3 }
]
L10n.load({
    'ar-AR': {
        'chart': {
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Zoom: 'زوم',
            Pan: 'مقلاة',
            Reset: 'إعادة تعيين',
            ResetZoom: ' زومإعادة تعيين'
        },
    }
});
let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year',
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Sales Amount in Millions',
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Product X', type: 'Column',
        marker: { dataLabel: { visible: true } }
    }, {
        dataSource: chartData,
        xName: 'x', yName: 'y1',
        name: 'Product Y', type: 'Column',
        marker: { dataLabel: { visible: true } }
    }],
    title: 'Average Sales Comparison',
    locale: 'ar-AR',
    zoomSettings: {
        enableMouseWheelZooming: true,
        enableDeferredZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true
    },
}, '#element');



