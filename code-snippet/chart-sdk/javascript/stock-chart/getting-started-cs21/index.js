function GetDateTimeData() {
    var series1 = [];
    var point1;
    var value = 80;
    var i;
    for (i = 1; i < 500; i++) {
        if (Math.random() > .5) {
            value += Math.random();
        } else {
            value -= Math.random();
        }
        point1 = { x: new Date(2000, 1, 1, 0, i), y: value.toFixed(1) };
        series1.push(point1);
    }
}

var stockChart = new ej.charts.StockChart({
        primaryXAxis: { valueType: 'DateTime', majorGridLines: { color: 'transparent' },
                        crosshairTooltip: { enable: true } },
        primaryYAxis: {
            lineStyle: { color: 'transparent' },
            majorTickLines: { color: 'transparent', width: 0 },
            crosshairTooltip: { enable: true }
        },
       series: [
            {
                dataSource: series1, type: 'Line', xName: 'x', yName: 'y', name: 'google'
            }
        ],
        seriesType: [],
        indicatorType: [],
        exportType: [],
        trendlineType : [],
        periods: [
            { intervalType: 'Minutes', interval: 1, text: '1m' },
            { intervalType: 'Minutes', interval: 30, text: '30m' },
            { intervalType: 'Hours', interval: 1, text: '1H' },
            { intervalType: 'Hours', interval: 12, text: '12H', selected: true },
            { text: '1D' }
        ],
        title: 'AAPL stock price by minutes',
        crosshair: {
            enable: true
        },
});
stockChart.appendTo('#element');

