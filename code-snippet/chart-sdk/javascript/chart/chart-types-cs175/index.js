var cylindricalData = [
    { x: 2006, y: 9 }, { x: 2007, y: 7.8 },
    { x: 2008, y: 10.5 }, { x: 2009, y: 8.4 },
    { x: 2010, y: 6 }, { x: 2011, y: 11 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        minimum: 2005, 
        maximum: 2012, 
        interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 3, 
        maximum: 12,
        interval: 1, 
        title: 'Percentage',
        labelFormat: '{value}%'
    },
    series: [{
        dataSource: cylindricalData,
        xName: 'x', yName: 'y',
        // Series type as bar series with cylinder shape
        type: 'Bar', columnFacet: 'Cylinder'
    }],
    title: 'Unemployment rate in percentage'
}, '#element');