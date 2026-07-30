var stockChart  = new ej.charts.StockChart({
  series: [
    {
      dataSource: chartData,
      type: 'Candle'
    },
  ],
    // Width and height for stock chart in pixel
    width: '650', height: '350'
});
stockChart.appendTo('#element');

