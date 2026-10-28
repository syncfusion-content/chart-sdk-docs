// axisLabelRender event: customize or cancel axis labels before they render.
var chartData = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis: {
        labelFormat: '${value}K'
    },
    legendSettings: { visible: true },
    title: 'Sales Analysis',
    series: [{
        dataSource: chartData,
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales',
        // Data label for chart series
        marker: {
            dataLabel: {
                visible: true
            }
        }
    }],
    // Axis label render handler
    axisLabelRender: function (args) {
        console.log('Chart axis label render event was triggered');
        // Example 1: Uppercase category X-axis labels
        if (args.axis.valueType === 'Category' && typeof args.text === 'string') {
            // Hide a specific label (e.g., 'Aug')
            if (args.text === 'Aug') {
                args.cancel = true;
                return;
            }
            args.text = args.text.toUpperCase();
        }

        // Example 2: Custom format for Y-axis numeric labels
        if (args.axis.valueType !== 'Category' && typeof args.value === 'number') {
            // Format as currency with 'K' suffix
            args.text = '$' + args.value + 'K';
        }
    }
}, '#element');