var series1 = [];
var point1;
var value = 80;
var i;
for (i = 1; i < 500; i++) {
    if (Math.random() > .5) {
        value += Math.random();
    } else {
        value -= Math.random();
    }
    point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };
    series1.push(point1);
}
var chart = new ej.charts.Chart({

    chartArea: { border: { width: 0 } },
    primaryXAxis: {
        valueType: 'DateTime',
        zoomFactor: 0.2, 
        zoomPosition: 0.6,
        scrollbarSettings: {
            enable: true,
            enableZoom: false,
            height: 14,
            trackRadius: 8,
            scrollbarRadius: 8,
            gripColor: 'transparent',
            trackColor: 'yellow',
            scrollbarColor: 'red'
        }
    },
    series: [
        {
            type: 'Area',
            dataSource: series1,
            name: 'Product X',
            xName: 'x',
            yName: 'y',
            border: { width: 0.5, color: '#00bdae' },
            animation: { enable: false }
        },
    ],
    //Zooming for chart
    zoomSettings:
    {
        enableSelectionZooming: true,
        enableScrollbar: true,
        mode: 'X'
    },
    title: 'Sales History of Product X',
    legendSettings: { visible: false },
}, '#element');