// scrollEnd: fires when the scrollbar interaction ends.
var chartData = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

function rangeInfo(args) {
    var c = args.currentRange || {};
    var p = args.previousRange || {};
    return {
        axis: args.axis && args.axis.name,
        current: { start: c.minimum, end: c.maximum },
        previous: { start: p.minimum, end: p.maximum }
    };
}

var chart = new ej.charts.Chart({
    // Enable scrollbar on the X axis
    primaryXAxis: {
        valueType: 'Category',
        scrollbarSettings: { enable: true }
    },
    primaryYAxis: { labelFormat: '${value}K' },
    legendSettings: { visible: true },
    title: 'Sales Analysis',
    // Enable zooming (selection, mouse wheel, pinch) on X-axis
    zoomSettings: {
        enableSelectionZooming: true,
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableDeferredZooming: false,
        mode: 'X' // Zoom horizontally; use 'XY' to allow both axes
    },
    series: [{
        dataSource: chartData,
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales',
        marker: { dataLabel: { visible: true } }
    }],
    // Fires when the scrollbar interaction ends
    scrollEnd: function (args) {
        console.log('Scroll end', rangeInfo(args));
    }
}, '#element');
