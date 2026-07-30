var stockChart = new ej.charts.StockChart({
       primaryYAxis: {
            lineStyle: { color: 'transparent' },
            majorTickLines: { color: 'transparent', width: 0 },
            crosshairTooltip: {enable:true,fill: 'green'}
        },
        primaryXAxis: { majorGridLines: { color: 'transparent' },
        crosshairTooltip: {enable:true,fill: 'green'}},
        series: [
            {
                dataSource: chartData,
                type: 'Candle'
            }
        ],
       crosshair: {
            enable: true,
            line: {width: 2, color: 'green'}
        },
        title: 'AAPL Stock Price'
});
stockChart.appendTo('#element');

