import {
    Chart,
    Export,
    IAfterExportEventArgs,
    RadarSeries
} from '@syncfusion/ej2-charts';

Chart.Inject(RadarSeries, Export);

const chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year',
        coefficient: 90,
        minimum: 2004,
        maximum: 2012,
        interval: 1
    },
    primaryYAxis: {
        title: 'Efficiency',
        minimum: 20,
        maximum: 40,
        interval: 5,
        labelFormat: '{value}%'
    },
    title: 'Efficiency of Oil-Fired Power Production',
    series: [
        {
            dataSource: [
                { x: 2005, y: 28 },
                { x: 2006, y: 25 },
                { x: 2007, y: 26 },
                { x: 2008, y: 27 },
                { x: 2009, y: 32 },
                { x: 2010, y: 35 },
                { x: 2011, y: 30 }
            ],
            type: 'Radar',
            drawType: 'Line',
            xName: 'x',
            yName: 'y'
        }
    ],
    afterExport: (args: IAfterExportEventArgs): void => {
        console.log('The Chart afterExport event was triggered.', args);
    }
});

chart.appendTo('#element');

const exportButton: HTMLElement | null =
    document.getElementById('export-button');

if (exportButton) {
    exportButton.onclick = (): void => {
        chart.exportModule.export('PNG', 'chart');
    };
}