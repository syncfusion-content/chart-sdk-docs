import { Chart, ColumnSeries, Category, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        maximum: 80,
        interval: 20, 
        title: 'Medals'
    },
    series:[{
        cornerRadius: {topRight: 10 , topLeft: 10},
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        // Series type as column series
        type: 'Column'
    }],
    title: 'Olympic Medals',
}, '#element');