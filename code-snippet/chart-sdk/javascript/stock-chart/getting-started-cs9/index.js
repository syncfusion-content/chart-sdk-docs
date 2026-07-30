 var stockChart = new ej.charts.StockChart({
  primaryXAxis:
  {
    opposedPosition: true
  },
  series: [
    {
      dataSource: chartData,
      type: 'Candle'
    },
  ],
});
stockChart.appendTo('#element');

