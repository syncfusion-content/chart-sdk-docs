var stockChart = new ej.charts.StockChart({
     primaryXAxis: {
            valueType: 'DateTime',
        },
        series: [
            {
                dataSource: chartData, type: 'Candle'
            }
        ],
        crosshair: { enable: true },
        legendSettings: { visible: true },
        title: 'Weather Condition'
});
stockChart.appendTo('#element');

