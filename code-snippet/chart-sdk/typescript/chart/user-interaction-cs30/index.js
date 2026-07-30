var series1 = [];
var series2 = [];
var point1;
var point2;
var value = 60;
var value1 = 50;
var i;
for (i = 1; i < 250; i++) {
    if (Math.random() > .5) {
        value += Math.random();
        value1 += Math.random();
    } else {
        value -= Math.random();
        value1 -= Math.random();
    }
    point1 = { x: new Date(2000, i, 1), y: value };
    point2 = { x: new Date(2000, i, 1), y: value1 };
    series1.push(point1);
    series2.push(point2);
}
var chart = new ej.charts.Chart({
        primaryXAxis: {
            majorGridLines: { width: 0 },
            valueType: 'DateTime',
            crosshairTooltip: { enable: true, fill: 'green' },
            labelFormat: 'yMMM'
        },
        primaryYAxis:
        {
            minimum: 10, maximum: 90, interval: 10,
            title: 'Temperature (°F)',
            rowIndex: 0,
            crosshairTooltip: { enable: true, fill: 'green' },
        },
        axes: [
            {
                majorGridLines: { width: 0 },
                rowIndex: 0, opposedPosition: true,
                minimum: 0, maximum: 160, interval: 20,
                name: 'yAxis', title: 'Rainfall (MM)',
                crosshairTooltip: { enable: true, fill: 'green' },
            }
        ],
        series: [
            {
                type: 'Line', width: 2, name: 'Temperature',
                dataSource: series1, xName: 'x', yName: 'y'
            },
            {
                type: 'Line', name: 'Rainfall', width: 2,
                dataSource: series2, xName: 'x', yName: 'y',
                yAxisName: 'yAxis'
            }
        ],
        crosshair: {
            enable: true,
            //customizing crosshair
            line: {width: 2, color: 'green'} },
        legendSettings: { visible: true },
        title: 'Weather Condition'
}, '#element');

