var stockChart = new ej.charts.StockChart({
    series:[{
        dataSource: chartData,
        type: 'Candle'
    }],
    title: 'Sales Analysis',
});
stockChart.appendTo('#element');

