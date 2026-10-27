import {
    Chart,
    IPrintEventArgs,
    RadarSeries
} from '@syncfusion/ej2-charts';

Chart.Inject(RadarSeries);

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

    // Customize the content before it is printed.
    beforePrint: (args: IPrintEventArgs): void => {
        console.log('The Chart beforePrint event was triggered.');

        const printContent: HTMLElement =
            args.htmlContent.cloneNode(true) as HTMLElement;

        const watermark: HTMLElement =
            document.createElement('div');

        watermark.textContent = 'CONFIDENTIAL';

        Object.assign(watermark.style, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-30deg)',
            color: 'rgba(0, 0, 0, 0.15)',
            fontSize: '48px',
            fontWeight: '700',
            pointerEvents: 'none',
            zIndex: '1',
            whiteSpace: 'nowrap'
        });

        const wrapper: HTMLElement =
            document.createElement('div');

        wrapper.style.position = 'relative';
        wrapper.appendChild(printContent);
        wrapper.appendChild(watermark);

        args.htmlContent = wrapper;
    }
});

chart.appendTo('#element');

const printButton: HTMLElement | null =
    document.getElementById('print-button');

if (printButton) {
    printButton.onclick = (): void => {
        chart.print();
    };
}