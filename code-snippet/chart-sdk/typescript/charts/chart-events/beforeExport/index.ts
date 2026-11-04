import {
    Category,
    Chart,
    Export,
    IExportEventArgs,
    ILoadedEventArgs,
    RadarSeries
} from '@syncfusion/ej2-charts';
Chart.Inject(RadarSeries, Category, Export);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year', coefficient: 90,
        minimum: 2004, maximum: 2012, interval: 1
    },
    primaryYAxis: {
        minimum: 20, maximum: 40, interval: 5,
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    title: 'Efficiency of oil-fired power production',
    series: [{
        dataSource: [
            { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 },
            { x: 2008, y: 27 }, { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
        ],
        type: 'Radar',
        drawType: 'Line',
        xName: 'x',
        yName: 'y'
    }],
    // Trigger an export after chart load (for demo)
    loaded: (args: ILoadedEventArgs): void => {
        // Exports as PNG; beforeExport will be raised just before this export executes
        args.chart.exportModule.export('PNG', 'export');
    },
    // beforeExport event handler to customize export settings
    beforeExport: (args: IExportEventArgs): void => {
        console.log('before export event was triggered');
        // Customize export settings before the export happens
        args.width = 800;   // exported image/PDF width
        args.height = 600;  // exported image/PDF height
    }
}, '#element');