import {
    Category,
    Chart,
    Export,
    IPrintEventArgs,
    RadarSeries
} from '@syncfusion/ej2-charts';
Chart.Inject(RadarSeries, Category, Export);

let chart: Chart = new Chart({
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
    title: 'Efficiency of oil-fired power production',
    series: [{
        dataSource: [
            { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
            { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
        ],
        type: 'Radar',
        drawType: 'Line',
        xName: 'x',
        yName: 'y'
    }],
    // beforePrint: customize what gets printed
    beforePrint: (args: IPrintEventArgs): void => {
        // Clone the chart element so we can safely modify the print content
        console.log('before print event was triggered');
        const cloned: HTMLElement = (args.htmlContent ?
            args.htmlContent.cloneNode(true) as HTMLElement :
            chart.element.cloneNode(true) as HTMLElement);

        // Example: add a simple watermark to the print content
        const watermark: HTMLElement = document.createElement('div');
        watermark.textContent = 'CONFIDENTIAL';
        Object.assign(watermark.style, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-30deg)',
            color: 'rgba(0,0,0,0.15)',
            fontSize: '48px',
            fontWeight: '700',
            pointerEvents: 'none',
            zIndex: '1',
            whiteSpace: 'nowrap'
        } as CSSStyleDeclaration);

        // Wrap cloned chart and overlay watermark
        const wrapper: HTMLElement = document.createElement('div');
        Object.assign(wrapper.style, { position: 'relative' } as CSSStyleDeclaration);
        wrapper.appendChild(cloned);
        wrapper.appendChild(watermark);
        args.htmlContent = wrapper;
    }
}, '#element');

// Trigger print
chart.print();