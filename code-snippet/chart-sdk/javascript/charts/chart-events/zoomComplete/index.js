// zoomComplete: fires after the zoom selection is completed.
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
    // Enable zooming (selection zooming on X-axis)
    zoomSettings: { enableSelectionZooming: true, enablePan: true, mode: 'X' },
    series: [{
        dataSource: chartData,
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales',
        marker: { dataLabel: { visible: true } }
    }],
    // Fires after the zoom selection is completed
    zoomComplete: function (args) {
        console.log('Zoom complete event was triggered');
    }
}, '#element');
