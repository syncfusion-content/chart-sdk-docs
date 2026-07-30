


import { Chart, Category, ColumnSeries, LineSeries } from '@syncfusion/ej2-charts';
import { categoryData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, LineSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    // Initializing multiple axis
    axes:[
        {
            rowIndex: 0,
            name: 'yAxis',
        }
    ],
    series:[{
        dataSource: categoryData,
        xName: 'country', yName: 'gold',
        type: 'Column'
    },{
        dataSource: categoryData,
        xName: 'country', yName: 'silver',
        yAxisName: 'yAxis',
        type: 'Line',
    }],

}, '#element');



