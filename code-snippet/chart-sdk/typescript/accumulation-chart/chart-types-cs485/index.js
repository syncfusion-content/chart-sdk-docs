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
    primaryXAxis: {
        valueType: 'DateTime'
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
        }
    ],
    zoomSettings: {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        accessibility: {
            accessibilityDescription: 'This allows users to zoom in and out of the chart using mouse wheel, pinch gestures, or selection box.',
            accessibilityRole: 'zoom'
        }
    },
    title: 'Sales History of Product X',
    legendSettings: { visible: false }
}, '#element');