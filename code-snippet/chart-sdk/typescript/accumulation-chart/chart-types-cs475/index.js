var pieData = [
    { x: 'Chrome', y: 37.0, text: '37%' },
    { x: 'Edge',   y: 12.5, text: '12.5%' },
    { x: 'Firefox', y: 8.1, text: '8.1%' },
    { x: 'Safari', y: 19.0, text: '19%' },
    { x: 'Opera',  y: 5.4, text: '5.4%' },
    { x: 'Others', y: 18.0, text: '18%' }
];

var accLegendRender = function (args) {
    if (args.point) {
        args.text = args.point.x + ' (' + args.point.y + '%)';
    }
};

var pieChart = new ej.charts.AccumulationChart({
    title: 'Browser Market Share',
    series: [{
        type: 'Pie',
        dataSource: pieData,
        xName: 'x',
        yName: 'y',
        name: 'Browser Share',
        dataLabel: { visible: true, name: 'text', position: 'Outside' },
        explode: true,
        explodeOffset: '10%'
    }],
    legendRender: accLegendRender,
    legendSettings: { visible: true, position: 'Right' },
    center: { x: '50%', y: '55%' },
});
pieChart.appendTo('#element');
