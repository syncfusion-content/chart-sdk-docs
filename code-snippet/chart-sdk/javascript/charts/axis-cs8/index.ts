


import { Chart, ColumnSeries, Category, MultiLevelLabel } from '@syncfusion/ej2-charts';
import { categoryData, MultiLevelLabel } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, MultiLevelLabel);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
           multiLevelLabels:[{
               categories: [{start: -0.5, end: 3.5, text: 'Half Yearly 1' },
                        { start: 3.5, end: 7.5, text: 'Half Yearly 2' }],
               textStyle:{size:'18px', color:'Red'}
           }]
    },
    series:[{
        dataSource: categoryData,
        xName: 'country', yName: 'gold',
        type: 'Column'
    }],

}, '#element');



