//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
    height: '200px',
    width: '500px',
    axisSettings: {
        minX: -1, maxX: 7, maxY: 8, minY: -1
    },
    fill: 'blue',
    valueType: 'Category',
    xName: 'x', yName: 'y',
    dataSource:   [{x: 'Mon', y: 3 },{x: 'Tue', y: 5 },{x: 'Wed', y: 2 },{x: 'Thu', y: 4 },{x: 'Fri', y: 6 },],
    // To enable tooltip for sparkline
    tooltipSettings: {
        visible: true,
        // formatting tooltip text
        format: '${x} : ${y}'
    }
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

