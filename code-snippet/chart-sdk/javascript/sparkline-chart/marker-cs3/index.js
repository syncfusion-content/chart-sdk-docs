//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
    height: '200px',
    width: '350px',
    axisSettings: {
        minX: -1, maxX: 7, maxY: 7, minY: -1
    },
    dataSource:   [3, 6, 4, 1, 3, 2, 5],
    fill: 'blue',
    markerSettings: {
        visible: ['All'],
        size: 5, fill: 'white', border: { color: 'blue', width: 2}
    }
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

