//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
   height: '150px',
    width: '130px',
    dataSource: [
            { x: 0, yval: 50 },
            { x: 1, yval: 30 },
            { x: 2, yval: 20 },
            { x: 3, yval: 30 },
            { x: 4, yval: 50 },
            { x: 5, yval: 40 },
            { x: 6, yval: 20 },
            { x: 7, yval: 10 },
            { x: 8, yval: 30 },
            { x: 9, yval: 10 },
            { x: 10, yval: 40 }
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'x', yName: 'yval',
    // Set min and max values to the y axis of sparkline
    axisSettings: {
            minY: 0, maxY: 150
    },
    // Assign the 'Column' as type of Sparkline
    type:'Column',
    // Assign the value type as 'Numeric' to the sparkline
    valueType: 'Numeric'
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

