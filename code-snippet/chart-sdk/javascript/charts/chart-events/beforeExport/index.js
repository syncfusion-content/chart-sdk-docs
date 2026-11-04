// beforeExport event: customize export settings before the export happens.
var chartData = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 },
    { x: 2008, y: 27 }, { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
];

var chart = new ej.charts.Chart({
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
        // Trigger an export after chart load (for demo)
        // Exports as PNG; beforeExport will be raised just before this export executes
        args.chart.exportModule.export('PNG', 'export');
    },
    // beforeExport event handler to customize export settings
    beforeExport: function (args) {
        console.log('before export event was triggered');
        // Customize export settings before the export happens
        args.fileName = 'custom-export';
        args.width = 800;                 // exported image/PDF width
        args.height = 600;                // exported image/PDF height
        args.orientation = 'Landscape';   // for PDF exports
        args.theme = 'MaterialDark';      // apply export theme
    }
}, '#element');