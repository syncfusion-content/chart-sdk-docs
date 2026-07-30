var stockChart = new ej.charts.StockChart({
        primaryXAxis: {
            valueType: 'DateTime'
        },
        indicatorType : [],
        trendlineType : [],
        series: [
            {
                type: 'Candle',
                dataSource: chartData,
                name: 'China'
            }],
        title: 'Unemployment Rates 1975-2010',
        tooltip: {enable: true},
        legendSettings: {
        visible: true,
        width: '500', height: '50',
        border: { width: 1, color: 'pink'}
        }
});
stockChart.appendTo('#element');

