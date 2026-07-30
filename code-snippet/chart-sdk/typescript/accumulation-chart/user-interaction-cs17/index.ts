


import { Chart, ColumnSeries, Category, Legend, Selection } from '@syncfusion/ej2-charts';
import { selectionData } from './datasource.ts'
Chart.Inject(ColumnSeries, Category, Legend, Selection);
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[{
        dataSource: selectionData,
        xName: 'country', yName: 'gold',
        name: 'Gold', type: 'Column',
        //Selection style for chart series selection
        selectionStyle: 'chartSelection1'
    }, {
        dataSource: selectionData,
        xName: 'country', yName: 'silver',
        name: 'Silver', type: 'Column',
        selectionStyle: 'chartSelection2'
    }, {
        dataSource: selectionData,
        xName: 'country', yName: 'bronze',
        name: 'Bronze', type: 'Column',
        selectionStyle: 'chartSelection3'
    }],
    selectionMode: 'Point',
    isMultiSelect: true,
    title: 'Olympic Medals'
}, '#element');



