// scrollChanged: fires whenever the axis scrollbar position or range changes.
// Generate enough points so the scrollbar is useful
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var chartData = [];
for (var i = 0; i < 60; i++) {
    chartData.push({
        month: months[i % 12] + ' ' + (2022 + Math.floor(i / 12)),
        sales: Math.floor(20 + Math.random() * 40)
    });
}

var chart = new ej.charts.Chart({
    // Enable axis scrollbar
    primaryXAxis: {
        valueType: 'Category',
        scrollbarSettings: { enable: true },
        labelIntersectAction: 'Rotate45'
    },
    primaryYAxis: { labelFormat: '${value}K' },
    legendSettings: { visible: true },
    title: 'Sales Analysis',
    series: [{
        dataSource: chartData,
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales',
        marker: { dataLabel: { visible: true } }
    }],
    // Fires whenever the axis scrollbar position/range changes
    scrollChanged: function (args) {
        console.log('scroll changed event was triggered');
    }
}, '#element');
