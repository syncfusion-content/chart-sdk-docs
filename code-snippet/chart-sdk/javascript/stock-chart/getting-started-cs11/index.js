var stockChart = new ej.charts.StockChart({
  primaryXAxis: { valueType: 'DateTime' },
  series: [
    {
      dataSource: chartData,
      type: 'Candle'
    },
  ],
});
stockChart.appendTo('#element');

