//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
    // To specify theme
    theme: 'Highcontrast',
    dataLabelSettings: { visible: ['All']},
    tooltipSettings: {
        trackLineSettings: { visible: true }
    },
    axisSettings: {
        minX: -1, maxX: 7
    },
    lineWidth: 3,
    border: { color: 'transparent', width: 2 },
    height: '200px',
    width: '350px',
    type: 'Line',
    fill: '#007dd1',
    dataSource: [3, 6, 4, 1, 3, 2, 5]
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

