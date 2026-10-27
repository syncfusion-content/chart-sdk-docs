// afterExport event: fires after a chart export operation completes.
var chartData = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 },
    { x: 2008, y: 27 }, { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
];

var chart = new ej.charts.Chart({
    // Chart title
    title: 'Efficiency of oil-fired power production',
    primaryXAxis: {
        title: 'Year',
        coefficient: 90,
        minimum: 2004,
        maximum: 2012,
        interval: 1
    },
    primaryYAxis: {
        minimum: 20,
        maximum: 40,
        interval: 5,
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    series: [{
        dataSource: chartData,
        type: 'Radar',
        xName: 'x',
        yName: 'y',
        drawType: 'Line'
    }],
    loaded: function (args) {
        // Trigger an export after the chart loads (for demo)
        args.chart.exportModule.export('PNG', 'export');
    },
    // afterExport event handler - invoked after export completes
    afterExport: function (args) {
        // Common post-export tasks: notify user, log, or use returned data
        console.log('Chart after export event was triggered', args);
    }
}, '#element');