//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
    // To render border around the sparkline
    containerArea: {
        border: { color: '#033e96', width: 2 }
    },
    border: { color: '#033e96', width: 1 },
    height: '200px',
    width: '350px',
    type: 'Area',
    fill: '#b2cfff',
    dataSource: [3, 6, 4, 1, 3, 2, 5]
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

