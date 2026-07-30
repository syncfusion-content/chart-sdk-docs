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
            //tooltip format for StockChart
             header: 'Unemployment',
             format: '<b>${point.x} : ${point.y}</b>'
        }
});
stockChart.appendTo('#element');

