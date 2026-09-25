var chartData = [
    { x: 2020, y: 133, low: 20, high: 35, open: 25, close: 30 },
    { x: 2021, y: 100, low: 35, high: 55, open: 35, close: 45 },
    { x: 2022, y: 125, low: 25, high: 75, open: 45, close: 55 },
    { x: 2023, y: 90,  low: 15, high: 45, open: 20, close: 25 },
    { x: 2024, y: 116, low: 26, high: 76, open: 30, close: 45 },
    { x: 2025, y: 120, low: 30, high: 80, open: 45, close: 65 },
    { x: 2026, y: 101, low: 11, high: 61, open: 15, close: 35 }
];

var legendRender = function (args) {
    // `args.point` is available only when `legendSettings.mode` is `'Point'`.
    if (args.point) {
        args.text = args.series.name + ' (' + args.point.x + ', ' + args.point.y + ')';
    }
};

var chart = new ej.charts.Chart({
    title: 'Sales Performance by Year',
    primaryXAxis: { title: 'Year', valueType: 'Double' },
    primaryYAxis: { title: 'Sales (in USD)' },
    series: [
        {
            dataSource: chartData, xName: 'x', yName: 'y', type: 'Column',
            animation: { enable: false }, name: 'Annual Sales',
            marker: { visible: true }
        },
    ],
    legendRender: legendRender,
    legendSettings: { visible: true, position: 'Bottom', mode: 'Point' },
});
chart.appendTo('#element');