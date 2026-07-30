


import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
import { categoryData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        isIndexed: true
    },
     //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [{ x: 'Myanmar', y: 7.3 }, { x: 'India', y: 7.9 }, { x: 'Bangladesh', y: 6.8 }, { x: 'Cambodia', y: 7.0 }, { x: 'China', y: 6.9 }],
                xName: 'x', yName: 'y',
            },
            {
                type: 'Column',
                dataSource: [{ x: 'Poland', y: 2.7 },{ x: 'Australia', y: 2.5 },{ x: 'Singapore', y: 2.0 },{ x: 'Canada', y: 1.4 },{ x: 'Germany', y: 1.8 }],
                xName: 'x',yName: 'y',
            }],

}, '#element');



