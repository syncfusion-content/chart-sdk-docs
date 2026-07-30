var stockChart  = new ej.charts.StockChart({
  series: [
    {
      dataSource: chartData,
      type: 'Candle'
    },
  ],
  width: '650', height: '350'
});
stockChart.appendTo('#element');

