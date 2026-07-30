     var chartData = [
     { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 40 }
 ];
var Chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Year',
        interval: 1
    },
    primaryYAxis: {
 
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    width: '90%',
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'series1',
        marker: { visible: false, dataLabel: { visible: true } },
        type: 'Column', animation: { enable: true },
        lastValueLabel: { enable: true }
    }],
 
    tooltip: { enable: true },
 
    title: 'Efficiency of oil-fired power production'
    }, '#element');

