// beforePrint event: customize what gets printed.
var chartData = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
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
    // beforePrint: customize what gets printed
    beforePrint: function (args) {
        // Clone the chart element so we can safely modify the print content
        console.log('before print event was triggered');
        var chartElement = document.getElementById('element');
        var cloned = chartElement ? chartElement.cloneNode(true) : undefined;
        if (!cloned) { return; }

        // Example: add a simple watermark to the print content
        var watermark = document.createElement('div');
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
        });

        // Wrap cloned chart and overlay watermark
        var wrapper = document.createElement('div');
        Object.assign(wrapper.style, { position: 'relative' });
        wrapper.appendChild(cloned);
        wrapper.appendChild(watermark);
        args.htmlContent = wrapper;
    }
}, '#element');

// Trigger print via the Print button in the page
var printBtn = document.getElementById('print');
if (printBtn) {
    printBtn.addEventListener('click', function () {
        chart.print();
    });
}