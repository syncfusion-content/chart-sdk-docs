


import { Chart, ColumnSeries, Category, ISeriesRenderEventArgs, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category);
let chartData: Object[] = [
    { country: "USA", gold: 50 },
    { country: "China", gold: 40 },
    { country: "Japan", gold: 70 },
    { country: "Australia", gold: 60 },
    { country: "France", gold: 50 },
    { country: "Germany", gold: 40 },
    { country: "Italy", gold: 40 },
    { country: "Sweden", gold: 30 }
];
let colors: string[] = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883',
    '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0, maximum: 80,
        interval: 20, title: 'Medals'
    },
    series: [{
        dataSource: chartData,
        xName: 'country', yName: 'gold',
        name: 'Gold', type: 'Column'
    }],
    // point render event for chart
    pointRender: (args: IPointRenderEventArgs): void => {
        args.fill = colors[args.point.index];
    },
    title: 'Olympic Medals'
}, '#element');



