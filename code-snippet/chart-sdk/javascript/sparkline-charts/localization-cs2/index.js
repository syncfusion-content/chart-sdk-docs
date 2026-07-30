//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
   height: '150px',
    width: '150px',
    enableRtl: true,    
    dataSource:   [0, 6, 4, 1, 3, 2, 5],        
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

