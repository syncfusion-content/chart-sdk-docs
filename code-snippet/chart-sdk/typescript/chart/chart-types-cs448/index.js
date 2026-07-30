var chartData = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 },{ x: 2007, y: 26 }, { x: 2008, y: 27 },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Year'
    },
    primaryYAxis: {
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    series:[{
        dataSource: chartData, xName: 'x', yName: 'y',
        //Series type as polar
        type: 'Radar', width:2,
        // Series draw type as line
        drawType: 'Line',
        marker: { visible: true }
    }],
    title: 'Efficiency of oil-fired power production',
    pointRender: function (args) {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}, '#element');

