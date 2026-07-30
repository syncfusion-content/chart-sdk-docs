import { Chart, ColumnSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 80,
        interval: 20,
        title: 'Medals'
    },
    series: [{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        // Series type as column series
        type: 'Column', name: 'Gold'
    },
    {
        dataSource: columnData,
        xName: 'country',
        yName: 'silver',
        name: 'Silver',
        columnWidth: 0.75,
        // Series type as column series
        type: 'Column'
    }],
    title: 'Olympic Medals'
}, '#element');



