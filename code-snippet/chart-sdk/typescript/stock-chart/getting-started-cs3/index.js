var stockChart = new ej.charts.StockChart({
   primaryXAxis: {
    crossesAt: 90
  },
  series: [
    {
      dataSource: chartData,
      type: 'Candle'
    },
  ],
});
stockChart.appendTo('#element');


