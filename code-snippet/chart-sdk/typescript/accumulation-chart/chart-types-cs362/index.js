var chartData = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 }, 
    { x: 2007, y: 26 }, { x: 2008, y: null },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, 
    { x: 2011, y: 30 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 2005,
        maximum: 2011,
        interval: 1
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 40,
        interval: 10,
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        //Series type as polar
        type: 'Polar', width: 2,
        // Series draw type as line
        drawType: 'Line',
        marker: { visible: true, width: 7, height: 7, isFilled: true },
        emptyPointSettings: {
            mode: 'Zero',
            fill: 'red'
        }
    }],
    title: 'Efficiency of oil-fired power production'
}, '#element');

