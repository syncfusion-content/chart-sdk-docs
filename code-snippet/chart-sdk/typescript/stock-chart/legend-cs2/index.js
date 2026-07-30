var stockChart = new ej.charts.StockChart({
        primaryXAxis: {
            valueType: 'DateTime'
        },
        indicatorType : [],
        trendlineType : [],
        series: [
            {
                type: 'Candle',
                dataSource: chartData,
                name: 'China'
            }],
        title: 'Unemployment Rates 1975-2010',
        tooltip: {enable: true},
        legendSettings: {
        visible: true,
        position:'Custom',
        location: { x: 200, y: 20 } }
});
stockChart.appendTo('#element');

