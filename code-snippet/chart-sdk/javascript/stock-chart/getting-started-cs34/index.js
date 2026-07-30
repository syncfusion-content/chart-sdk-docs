var stockChart = new ej.charts.StockChart({
    // Title for chart
    title: 'Sales Analysis',
    series:[{
        dataSource: chartData,
        name:'Sales',
        type: 'Candle'
    }],
});
stockChart.appendTo('#element');

