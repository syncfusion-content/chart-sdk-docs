// tooltipRender: customize the tooltip before it renders.
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
    // Enable tooltip; event will customize the content/style
    tooltip: { enable: true, enableAnimation: true, shared: false },
    series: [{
        dataSource: chartData,
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales'
    }],
    // Customize tooltip before it renders
    tooltipRender: function (args) {
        // Append currency formatting to the tooltip text
        if (typeof args.text === 'string' && args.point && typeof args.point.y === 'number') {
            args.text = args.point.x + ' : $' + args.point.y + 'K';
        }
    }
}, '#element');
