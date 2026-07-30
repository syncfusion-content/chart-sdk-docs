var stockChart = new ej.charts.StockChart({
    primaryXAxis: {
        title: 'Months',
    },
    primaryYAxis: {
        title: 'Rupees against Dollars',
        interval: 5
    },
    tooltip:{enable:true},
    chartArea: { border: { width: 0 } },
    series: [{
        dataSource: chartData,
        name: 'Apple Inc',
        fill: '#0066FF',
        //Series type as candle
        type: 'Candle',
        trendlines: [{ type: 'MovingAverage', enableTooltip:false }]
    }],
    seriesType: [],
    indicatorType: [],
    exportType: [],
    title: 'Historical Indian Rupee Rate (INR USD)'
});
stockChart.appendTo('#element');

