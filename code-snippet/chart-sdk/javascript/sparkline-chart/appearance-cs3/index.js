//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
    containerArea: {
        border: { color: '#033e96', width: 2 },
        // To render sparkline with background
        background: '#eff1f4',
    },
    padding: { left: 20, right: 20, bottom: 20, top: 20},
    border: { color: '#033e96', width: 2 },
    height: '200px',
    width: '350px',
    type: 'Area',
    fill: '#b2cfff',
    dataSource: [3, 6, 4, 1, 3, 2, 5]
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

