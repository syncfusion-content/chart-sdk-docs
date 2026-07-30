


import { Chart, ColumnSeries, Category, ChartAnnotation } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, ChartAnnotation);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    annotations:[{
        content: '70 Gold Medals',
        coordinateUnits: 'Point',
        x: 'France',
        y: 50
    }],
    series:[{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        type: 'Column'
    }],

}, '#element');



