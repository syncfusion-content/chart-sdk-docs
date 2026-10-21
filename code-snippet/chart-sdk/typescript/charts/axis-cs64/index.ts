import {
    Chart,
    ColumnSeries,
    Category
} from '@syncfusion/ej2-charts';

Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        isIndexed: true,
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 80,
        interval: 20,
        title: 'Medals'
    },
    series: [
        {
            dataSource: [
                { x: 'USA', y: 50 },
                { x: 'China', y: 40 },
                { x: 'Japan', y: 70 }
            ],
            xName: 'x',
            yName: 'y',
            name: 'Series 1',
            type: 'Column'
        },
        {
            dataSource: [
                { x: 'Germany', y: 45 },
                { x: 'France', y: 55 },
                { x: 'Italy', y: 35 }
            ],
            xName: 'x',
            yName: 'y',
            name: 'Series 2',
            type: 'Column'
        }
    ],
    title: 'Indexed Category Axis'
}, '#element');

chart.appendTo('#element');