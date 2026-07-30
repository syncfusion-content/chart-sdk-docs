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
        //Default tooltip for StockChart
        tooltip: {enable: true}
});
stockChart.appendTo('#element');

