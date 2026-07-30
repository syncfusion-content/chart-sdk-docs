var stockChart = new ej.charts.StockChart({
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
        title: 'AAPL Stock Price',
        exportType: []
});
stockChart.appendTo('#element');

