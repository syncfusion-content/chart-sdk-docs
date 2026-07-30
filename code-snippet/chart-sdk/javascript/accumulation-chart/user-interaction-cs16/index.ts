

import { Chart, ColumnSeries, Category, Legend, Selection, Highlight } from '@syncfusion/ej2-charts';
import { selectionData } from './datasource.ts'
Chart.Inject(ColumnSeries, Category, Legend, Selection, Highlight);
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[{
        dataSource: selectionData,
        xName: 'country', yName: 'gold',
        name: 'Gold', type: 'Column',
        animation: {enable: false},
    }, {
        dataSource: selectionData,
        xName: 'country', yName: 'silver',
        name: 'Silver', type: 'Column',
        animation: {enable: false},
    }, {
        dataSource: selectionData,
        xName: 'country', yName: 'bronze',
        name: 'Bronze', type: 'Column',
        animation: {enable: false},
    }],
    // Selection through on legend
    legendSettings: { visible: true, toggleVisibility: false, enableHighlight: true},
    title: 'Olympic Medals'
}, '#element');



