import {
    Category,
    Chart,
    ColumnSeries,
    IMultiLevelLabelClickEventArgs
} from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        // Multi-level labels: two groups by index range
        multiLevelLabels: [
            {
                categories: [
                    // Start and end accept number, date, or string values
                    { start: -0.5, end: 3.5, text: 'Half Yearly 1' },
                    { start: 3.5, end: 7.5, text: 'Half Yearly 2' }
                ],
                border: { type: 'Rectangle', color: '#BDBDBD', width: 1 },
                alignment: 'Center'
            }
        ]
    },
    primaryYAxis: { title: 'Gold Medals' },
    title: 'Olympic Medals',
    legendSettings: { visible: false },
    series: [{
        dataSource: [
            { country: "USA", gold: 50, silver: 70, bronze: 45 },
            { country: "China", gold: 40, silver: 60, bronze: 55 },
            { country: "Japan", gold: 70, silver: 60, bronze: 50 },
            { country: "Australia", gold: 60, silver: 56, bronze: 40 },
            { country: "France", gold: 50, silver: 45, bronze: 35 },
            { country: "Germany", gold: 40, silver: 30, bronze: 22 },
            { country: "Italy", gold: 40, silver: 35, bronze: 37 },
            { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
        ],
        type: 'Column',
        xName: 'country',
        yName: 'gold',
        name: 'Gold'
    }],
    // multiLevelLabelClick: event when a multi-level label segment is clicked
    multiLevelLabelClick: (args: IMultiLevelLabelClickEventArgs): void => {
        console.log('MultiLevel label click event was triggered');
    }
}, '#element');