import {
    Chart,
    ColumnSeries,
    Category,
    MultiLevelLabel
} from '@syncfusion/ej2-charts';

Chart.Inject(ColumnSeries, Category, MultiLevelLabel);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        // Multilevel labels with categories
        multiLevelLabels: [{
            categories: [
                { start: 0, end: 2, text: 'Q1-Q3 2014-2015', maximumTextWidth: 50 },
                { start: 3, end: 5, text: 'Q4 2015-Q2 2017', maximumTextWidth: 50 },
                { start: 6, end: 7, text: 'Q3-Q4 2020-2021', maximumTextWidth: 50 }
            ]
        }],
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 50,
        interval: 10,
        title: 'Sales in Percentage'
    },
    series: [{
        dataSource: [
            { x: '2014', y: 21.5 },
            { x: '2015', y: 24 },
            { x: '2016', y: 36.5 },
            { x: '2017', y: 30.4 },
            { x: '2018', y: 29.3 },
            { x: '2019', y: 41.4 },
            { x: '2020', y: 35 },
            { x: '2021', y: 42.4 }
        ],
        xName: 'x',
        yName: 'y',
        name: 'Sales',
        type: 'Column'
    }],
    title: 'Multilevel Labels - Categories'
}, '#element');

chart.appendTo('#element');
