var stockChart = new ej.charts.StockChart({
        series: [
            {
                dataSource: chartData, type: 'Candle',
                animation: { enable: true },
                bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
            }
        ],
});
stockChart.appendTo('#element');

