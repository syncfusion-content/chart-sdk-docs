let stockChart = new ej.charts.StockChart({
    title: 'AAPL Stock Price',
    primaryXAxis: {
        valueType: 'DateTime'
    },
    tooltip: { enable: true },
    crosshair: { enable: true },
    series: [
        {
            dataSource: chartData,
            xName: 'date',
            open: 'open',
            high: 'high',
            low: 'low',
            close: 'close',
            volume: 'volume',
            name: 'Apple Inc',
            type: 'Candle'
        }
    ],
    beforeIndicatorChange: (args) => {
        console.log('Before Indicator Change:', args.type);
        // prevent EMA indicator
        if (args.type === 'Ema') {
            args.cancel = true;
        }
    },
    indicatorChanged: (args) => {
        console.log(args.type + ' indicator ' + (args.isAdd ? 'added' : 'removed'));
    }
});

stockChart.appendTo('#element');
