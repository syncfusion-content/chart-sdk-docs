var stockChart = new ej.charts.StockChart({
        enablePeriodSelector: false,
        primaryXAxis: { valueType: 'DateTime', majorGridLines: { color: 'transparent' },
                        crosshairTooltip: { enable: true } },
        primaryYAxis: {
            lineStyle: { color: 'transparent' },
            majorTickLines: { color: 'transparent', width: 0 },
            crosshairTooltip: { enable: true }
        },
        series: [
            {
                dataSource: chartData, type: 'Candle', name: 'google',
            }
        ],
        title: 'AAPL stock price by minutes',
        crosshair: {
            enable: true
        }
});
stockChart.appendTo('#element');

