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
            }],
        title: 'Unemployment Rates 1975-2010',
        tooltip: {enable: true},
        legendSettings: { visible: true }
});
stockChart.appendTo('#element');

