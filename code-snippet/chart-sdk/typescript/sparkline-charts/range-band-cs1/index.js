//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
   height: '150px',
    width: '150px',
    lineWidth: 2,
    fill: '#0d3c9b',
    dataSource:   [0, 6, 4, 1, 3, 2, 5],
    // To configure range band settings
    rangeBandSettings: [
            {
                startRange: 1,
                endRange: 3,
                color: '#bfd4fc',
                opacity:0.4
            }
    ]
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

