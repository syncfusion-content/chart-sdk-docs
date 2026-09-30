var chartData = [
    { month: 'Jan', sales: 35, country: 'USA', growth: 12.5 },
    { month: 'Feb', sales: 42, country: 'UK', growth: 15.2 },
    { month: 'Mar', sales: 38, country: 'India', growth: 10.8 },
    { month: 'Apr', sales: 48, country: 'Germany', growth: 18.4 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        title: 'Sales'
    },
    tooltip: {
        enable: true
    },
    series: [{
        dataSource: chartData,
        xName: 'month',
        yName: 'sales',
        name: 'Sales',
        type: 'Column'
    }],
    tooltipRender: function (args) {
        var rawData = args.data.rawData;

        if (rawData) {
            args.text =
                'Sales: <b>' + rawData.sales + '</b><br/>' +
                'Country: <b>' + rawData.country + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    },
    title: 'Monthly Sales'
}, '#element');