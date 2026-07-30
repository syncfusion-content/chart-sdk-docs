var stockChart = new ej.charts.StockChart({
    chartArea: { border: { width: 0 } },
    primaryYAxis: {
        lineStyle: { color: 'transparent' },
        majorTickLines: { color: 'transparent', width: 0 },
    },
    border : {width : 0},
    primaryXAxis: { majorGridLines: { color: 'transparent' }, crosshairTooltip: { enable: true } },
    series: [
        {
            dataSource: chartData, name: 'Apple Inc',
            type: 'Candle', bearFillColor: '#00226C', bullFillColor: "#0450C2", fill: 'blue'
        },
    ],
    indicators: [{
        type: 'BollingerBands', field: 'Close', seriesName: 'Apple Inc', xName: 'date', high: 'high', low: 'low', open: 'open', close: 'close',
        period: 10, upperLine: { color: '#ffb735', width: 1 },
        lowerLine: { color: '#f2ec2f', width: 1 }
    }],
    seriesType: [],
    exportType: [],
    trendlineType: [],
    tooltip: {
        enable: true
    },
    crosshair: {
        enable: true
    },
    height: '350',
});
stockChart.appendTo('#element');


