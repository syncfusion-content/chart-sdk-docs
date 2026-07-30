import { Chart, Category, PolarSeries, ColumnSeries } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(Category, PolarSeries, ColumnSeries);
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0, maximum: 80,
        interval: 20, title: 'Medals'
    },
    series:[{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        // Series type as polar series
        type: 'Polar',
        // Series draw type as column series
        drawType: 'Column'
    }],
    title: 'Olympic Medals'
}, '#element');