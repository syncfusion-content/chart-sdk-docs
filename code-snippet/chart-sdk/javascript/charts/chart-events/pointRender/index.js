// pointRender: customize each point's appearance before rendering.
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
        type: 'Column',
        xName: 'month',
        yName: 'sales',
        name: 'Sales'
    }],
    // Highlight the highest value in red and the lowest in green
    pointRender: function (args) {
        if (typeof args.point.y === 'number') {
            var yValues = chartData.map(function (d) { return d.sales; });
            var max = Math.max.apply(null, yValues);
            var min = Math.min.apply(null, yValues);
            if (args.point.y === max) {
                args.fill = '#e74c3c';
            } else if (args.point.y === min) {
                args.fill = '#27ae60';
            }
        }
    }
}, '#element');
