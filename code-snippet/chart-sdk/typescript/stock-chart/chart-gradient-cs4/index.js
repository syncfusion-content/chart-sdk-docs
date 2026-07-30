var stockChart = new ej.charts.StockChart({
  primaryXAxis: {
    majorGridLines: {
      width: 0
    },
  },
  primaryYAxis: {
    majorGridLines: {
      width: 0
    },
    interval: 10
  },
  series: [
    {
      dataSource: stockData,
      xName: 'x',
      radialGradient: {
        cx: 0.5, cy: 0.5, r: 0.5,
        fx: 0.5, fy: 0.5,
        gradientColorStop: [
          { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
          { color: '#7C3AED', offset: 100, opacity: 1, lighten: 0, brighten: 0 },
        ]
      }
    }
  ],
  title: 'AAPL Stock Price',
});
stockChart.appendTo('#element');

