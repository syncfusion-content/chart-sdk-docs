var stockChart = new ej.charts.StockChart({
  series: [
    {
      dataSource: chartData,
      type: 'Candle'
    },
  ],
  // Width and height for  stock chart in percentage
    width: '80%', height: '90%'
});
stockChart.appendTo('#element');

