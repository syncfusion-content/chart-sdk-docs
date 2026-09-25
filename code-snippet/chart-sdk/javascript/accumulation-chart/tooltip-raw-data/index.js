var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [
                { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
                { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
                { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
                { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
            ],
            radius: '100%',
            xName: 'x',
            yName: 'y'
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
    }
}, '#element');