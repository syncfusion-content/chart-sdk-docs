// dragEnd event: fires when the drag operation completes and the final value is committed.
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
    title: 'Monthly Sales (Drag a point to edit)',
    series: [{
        dataSource: chartData,
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales',
        // drag along Y only
        dragSettings: { enable: true, type: 'Y' }
    }],
    // Fires when the drag operation completes and the final value is committed
    dragEnd: function (args) {
        // Persist or process the final value here
        console.log('Drag end event was triggered');
    }
}, '#element');