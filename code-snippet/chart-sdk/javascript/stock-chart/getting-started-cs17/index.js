var stockChart = new ej.charts.StockChart({
    series:[{
        dataSource: chartData,
        type: 'Candle'
    }]
});
stockChart.appendTo('#element');

