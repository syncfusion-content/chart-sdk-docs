import { Chart, BarSeries, Category } from '@syncfusion/ej2-charts';
import { data1, data2, data3, data4 } from './datasource.ts';
Chart.Inject(BarSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series: [
        {
            type: 'Bar', xName: 'x', yName: 'y', groupName: 'USA', columnWidth: 0.7,
            dataSource: data1, columnSpacing: 0.1,
        },
        {
            type: 'Bar', xName: 'x',  yName: 'y', groupName: 'USA', columnWidth: 0.5,
            dataSource: data2, columnSpacing: 0.1,
        },
        {
            type: 'Bar', xName: 'x',  yName: 'y', groupName: 'UK', columnWidth: 0.7,
            dataSource: data3, columnSpacing: 0.1,
        },
        {
            type: 'Bar', xName: 'x', yName: 'y', groupName: 'UK', columnWidth: 0.5,
            dataSource: data4, columnSpacing: 0.1,
        }
    ]
}, '#element');



