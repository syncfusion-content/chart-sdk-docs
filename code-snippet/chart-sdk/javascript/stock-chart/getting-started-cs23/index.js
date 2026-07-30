var stockChart = new ej.charts.StockChart({
       enableSelector : false,
       primaryYAxis: {
            lineStyle: { color: 'transparent' },
            majorTickLines: { color: 'transparent', width: 0 },
        },
        primaryXAxis: { majorGridLines: { color: 'transparent' }},
        series: [
            {
                dataSource: chartData,
                type: 'Candle'
            },
        ],
        title: 'AAPL Stock Price'
});
stockChart.appendTo('#element');

