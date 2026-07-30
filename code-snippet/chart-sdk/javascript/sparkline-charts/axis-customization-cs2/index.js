//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
    height: '150px',
    width: '130px',
    dataSource: [
            { x: 0, xval: 'Robert', yval: 60 },
            { x: 1, xval: 'Andrew', yval: 65 },
            { x: 2, xval: 'Suyama', yval: 70 },
            { x: 3, xval: 'Michael', yval: 80 },
            { x: 4, xval: 'Janet', yval: 55 },
            { x: 5, xval: 'Davolio', yval: 90 },
            { x: 6, xval: 'Fuller', yval: 75 },
            { x: 7, xval: 'Nancy', yval: 85 }
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'xval', yName: 'yval',
    // Assign the 'Column' as type of Sparkline
    type:'Column',
    // Assign the value type as "Category" to the sparkline
    valueType: 'Category'
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

