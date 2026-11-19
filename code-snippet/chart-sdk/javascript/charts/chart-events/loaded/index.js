// loaded: fires after the chart is rendered in the DOM.
var chartData = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: { valueType: 'Category', title: 'Month' },
    primaryYAxis: { title: 'Sales' },
    title: 'Monthly Sales',
    series: [{
        dataSource: chartData,
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales'
    }],
    // Fires after the chart is rendered in the DOM
    loaded: function (args) {
        var element = args.chart && args.chart.element;
        var bbox = element && element.getBoundingClientRect();
        console.log('Chart loaded:', {
            title: args.chart && args.chart.title,
            width: bbox && bbox.width,
            height: bbox && bbox.height
        });
    }
}, '#element');
