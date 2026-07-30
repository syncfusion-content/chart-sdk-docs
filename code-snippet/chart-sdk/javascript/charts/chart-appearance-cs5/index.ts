


import { Chart, ColumnSeries, Category, ChartAnnotation } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, ChartAnnotation);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    primaryYAxis: {
        title: '(m2/min)'
    },
    annotations: [{
        content: '<div id="text" style="transform: rotate(-90deg);">Speed Rate</div>',
        x: 6,
        y: 180,
        coordinateUnits: 'Pixel',
        Region: 'Chart'
    }],
    series: [{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        type: 'Column'
    }],

}, '#element');



