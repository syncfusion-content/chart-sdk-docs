


import { Chart, ColumnSeries, Category, Legend, Selection } from '@syncfusion/ej2-charts';
import { selectionData } from './datasource.ts'
Chart.Inject(ColumnSeries, Category, Legend, Selection);
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[{
        dataSource: selectionData ,
        xName: 'country', yName: 'gold',
        name: 'Gold', type: 'Column',
        animation: {enable: false},
        selectionStyle: 'chartSelection1'
    }, {
        dataSource: selectionData ,
        xName: 'country', yName: 'silver',
        name: 'Silver', type: 'Column',
        animation: {enable: false},
        selectionStyle: 'chartSelection2'
    }, {
        dataSource: selectionData ,
        xName: 'country', yName: 'bronze',
        name: 'Bronze', type: 'Column',
        animation: {enable: false},
        selectionStyle: 'chartSelection3'
    }],
    selectionMode: 'Point',
    isMultiSelect: true,
    // Selcted data indexes for chart series
    selectedDataIndexes: [
        { series: 0, point: 1}, { series: 2, point: 3}
    ],
    title: 'Olympic Medals'
}, '#element');



