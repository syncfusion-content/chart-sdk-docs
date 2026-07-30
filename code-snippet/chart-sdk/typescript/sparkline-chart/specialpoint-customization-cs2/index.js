//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
  height: '150px',
    width: '130px',
    dataSource: [12, 15, -10, 13, 15, 6, -12, 17, 13, 0, 8, -10],
    // Assign the 'WinLoss' as type of Sparkline
    type:'WinLoss',
    // Assign the value type as "Numeric" to the sparkline
    valueType: 'Numeric',
    tiePointColor:'blue'
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

