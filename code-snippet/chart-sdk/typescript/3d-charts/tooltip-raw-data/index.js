var chartData = [
    { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
    { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
    { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
    { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
];

var chart = new ej.charts.Chart3D({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Country'
    },
    primaryYAxis: {
        title: 'Sales'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'x',
            yName: 'y',
            name: 'Sales',
            type: 'Column'
        }
    ],
    tooltip: {
        enable: true
    },
    tooltipRender: function (args) {
        var rawData = args.data.rawData;

        if (rawData) {
            args.text =
                'Sales: <b>' + rawData.y + '</b><br/>' +
                'Region: <b>' + rawData.region + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    },
    title: 'Sales by Country'
}, '#element');