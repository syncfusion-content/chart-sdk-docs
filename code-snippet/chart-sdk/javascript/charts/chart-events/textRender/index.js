// textRender: customize data labels before they are rendered.
var chartData = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: { valueType: 'Category' },
    primaryYAxis: { labelFormat: '${value}K' },
    legendSettings: { visible: true },
    title: 'Sales Analysis',
    series: [{
        dataSource: chartData,
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales',
        // Enable data labels for the series
        marker: { visible: true, dataLabel: { visible: true } }
    }],
    // Axis label render handler
    axisLabelRender: function (args) {
        if (args.axis.valueType === 'Category' && typeof args.text === 'string') {
            if (args.text === 'Aug') {
                args.cancel = true; // hide a specific X-axis label
                return;
            }
            args.text = args.text.toUpperCase();
        }
        if (args.axis.valueType !== 'Category' && typeof args.value === 'number') {
            args.text = '$' + args.value + 'K';
        }
    },
    // Customize data labels before they are rendered
    textRender: function (args) {
        // Example 1: Format label text as currency with K suffix
        if (typeof args.point.y === 'number') {
            args.text = '$' + args.point.y + 'K';
        }
        // Example 2: Highlight a particular month's label (e.g., 'Aug')
        if (args.point.x === 'Aug') {
            args.text = args.text + ' ★';
            args.color = '#e74c3c';
            args.font = { fontWeight: '700', size: '14px' };
        }
    }
}, '#element');
