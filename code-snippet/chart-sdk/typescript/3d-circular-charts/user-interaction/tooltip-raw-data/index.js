var chartData = [
    { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
    { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
    { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
    { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
];

var chart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: chartData,
            xName: 'x',
            yName: 'y',
            name: 'Sales'
        }
    ],
    tilt: -45,
    tooltip: {
        enable: true
    },
    legendSettings: {
        visible: false
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