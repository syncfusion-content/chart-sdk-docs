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
    width: '500px',
    title: 'Monthly Sales Analysis Across All Business Regions for 2025',
    titleStyle: {
        textOverflow: 'Wrap',
        textAlignment: 'Center',
        size: '18px',
        fontFamily: 'Segoe UI',
        fontWeight: '600'
    },
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 60,
        interval: 10,
        title: 'Sales',
        labelFormat: '${value}K'
    },
    series: [{
        dataSource: chartData,
        name: 'Sales',
        xName: 'month',
        yName: 'sales',
        type: 'Line',
        width: 2,
        marker: {
            visible: true
        }
    }]
}, '#element');