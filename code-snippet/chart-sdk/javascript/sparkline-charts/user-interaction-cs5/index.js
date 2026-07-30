//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
    height: '200px',
    width: '500px',
    axisSettings: {
        minY: -1,
        maxY: 8
    },
    fill: 'blue',
    valueType: 'DateTime',
    xName: 'x',
    yName: 'y',
    dataSource: [
        { x: new Date(2024, 0, 1), y: 3 },
        { x: new Date(2024, 1, 1), y: 5 },
        { x: new Date(2024, 2, 1), y: 2 },
        { x: new Date(2024, 3, 1), y: 4 },
        { x: new Date(2024, 4, 1), y: 6 }
    ],
    // To enable tooltip for sparkline
    tooltipSettings: {
        visible: true,
        // formatting tooltip text
        format: '${x:MMM yyyy} : ${y:n2}'
    }
});

//Render initialized Sparkline
sparklineInstance.appendTo("#element");
