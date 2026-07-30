var stockChart = new ej.charts.StockChart({
  chartArea: { border: { width: 0 } },
  primaryYAxis: {
    lineStyle: { color: 'transparent' },
    majorTickLines: { color: 'transparent', width: 0 },
  },
  border: { width: 0 },
  primaryXAxis: { majorGridLines: { color: 'transparent' }, crosshairTooltip: { enable: true } },
  series: [
    {
      dataSource: stockchartData, name: 'Apple Inc',
      type: 'Candle'
    },
  ],
  indicators: [{
    type: 'Ema', field: 'Close', seriesName: 'Apple Inc', xName: 'date', high: 'high', low: 'low', open: 'open', close: 'close',
    period: 10,
    radialGradient: {
      cx: 0.5, cy: 0.5, r: 0.5,
      fx: 0.5, fy: 0.5,
      gradientColorStop: [
        { color: 'red', offset: 0, opacity: 1 },
        { color: 'blue', offset: 100, opacity: 1 },
      ]
    }
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

