var stockChart = new ej.charts.StockChart({
  primaryXAxis: {
    title: 'Months',
  },
  primaryYAxis: {
    title: 'Rupees against Dollars',
    interval: 5
  },
  tooltip: { enable: true },
  chartArea: { border: { width: 0 } },
  series: [{
    dataSource: chartData,
    name: 'Apple Inc',
    fill: '#0066FF',
    type: 'Candle',
    trendlines: [{
      type: 'MovingAverage', enableTooltip: false, width: 2,
      linearGradient: {
        x1: 0, y1: 0,
        x2: 0, y2: 1,
        gradientColorStop: [
          { color: '#6A0DAD', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
          { color: '#FFFF00', offset: 100, opacity: 1, lighten: 0, brighten: 0 }
        ]
      }
    }]
  }],
  seriesType: [],
  indicatorType: [],
  exportType: [],
  title: 'Historical Indian Rupee Rate (INR USD)'
});
stockChart.appendTo('#element');

