
var chartData = [
    { x: 1900, y: 4, y1: 2.6, y2: 2.8 }, { x: 1920, y: 3.0, y1: 2.8, y2: 2.5 },
    { x: 1940, y: 3.8, y1: 2.6, y2: 2.8 }, { x: 1960, y: 3.4, y1: 3, y2: 3.2 },
    { x: 1980, y: 3.2, y1: 3.6, y2: 2.9 }, { x: 2000, y: 3.9, y1: 3, y2: 2 }
]
var chart= new ej.charts.Chart({
    primaryXAxis: {
        title: 'Year',
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Sales Amount in Millions',
        //Label format as currency
        labelFormat: 'c'
    },
    series:[{
        dataSource: chartData, opacity: 0.6,
        xName: 'x', yName: 'y',
        name: 'Product X', type: 'Area'
    },{
        dataSource: chartData, opacity: 0.6,
        xName: 'x', yName: 'y1',
        name: 'Product Y', type: 'Area'
    },{
        dataSource: chartData, opacity: 0.6,
        xName: 'x', yName: 'y2',
        name: 'Product Z', type: 'Area'
    }],
    title: 'Average Sales Comparison'
}, '#element');

