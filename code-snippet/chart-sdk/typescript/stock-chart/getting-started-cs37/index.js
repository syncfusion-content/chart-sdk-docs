var stockChart = new ej.charts.StockChart({
    primaryXAxis: {
        valueType: 'DateTime'
    },
    series: [
        {
            type: 'Candle',
            dataSource: chartData
        }],
    title: 'Unemployment Rates 1975-2010',
    tooltip: {
        enable: true,
        shared: true,
        position: 'Nearest'
    }
});
stockChart.appendTo('#element');