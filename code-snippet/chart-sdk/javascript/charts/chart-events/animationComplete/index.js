// animationComplete event: fires when the chart series animation finishes rendering.
var chartData = [
    { month: 'Jan', sales: 35 },
    { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 },
    { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 },
    { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 },
    { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 },
    { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 },
    { month: 'Dec', sales: 32 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis: {
        labelFormat: '${value}K'
    },
    legendSettings: {
        visible: true
    },
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
        },
        animation: {
            enable: true,
            duration: 1000, // ms
            delay: 0
        }
    }],
    // Trigger when series animation finishes rendering
    animationComplete: function (args) {
        console.log('Chart animation complete event was triggered');
    }
}, '#element');