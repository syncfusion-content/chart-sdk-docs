


import { Chart, ColumnSeries, Category, Legend, Selection } from '@syncfusion/ej2-charts';
import { selectionData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, Legend, Selection);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[{
        dataSource: selectionData,
        xName: 'country', yName: 'gold',
        name: 'Gold', type: 'Column'
    }, {
        dataSource: selectionData,
        xName: 'country', yName: 'silver',
        name: 'Silver', type: 'Column'
    }, {
        dataSource: selectionData,
        xName: 'country', yName: 'bronze',
        name: 'Bronze', type: 'Column'
    }],
    // selection mode as point
    selectionMode: 'Point',
    title: 'Olympic Medals'
}, '#element');



