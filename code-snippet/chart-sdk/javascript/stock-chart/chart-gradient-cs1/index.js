var stockChart = new ej.charts.StockChart({
  primaryXAxis: {
    valueType: 'DateTime',
  },
  primaryYAxis: {
    interval: 10
  },
  series: [
    {
      name: 'AAPL',
      dataSource: StockDetails,
      type: 'Candle',
      xName: 'Date', high: 'High', low: 'Low', open: 'Open', close: 'Close', volume: 'Volume',
      linearGradient: {
        x1: 0, y1: 0,
        x2: 1, y2: 1,
        gradientColorStop: [
          { color: '#FF7E5F', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
          { color: '#FEB47B', offset: 100, opacity: 1, lighten: 0, brighten: 0.5 },
        ]
      }
    }
  ],
  title: 'AAPL Stock Price',
});
stockChart.appendTo('#element');

