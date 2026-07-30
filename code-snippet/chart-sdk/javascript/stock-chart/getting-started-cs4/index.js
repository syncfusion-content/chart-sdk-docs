var stockChart = new ej.charts.StockChart({
   primaryXAxis: {

    title: 'AAPL Historical',
  },
  series: [
    {
      dataSource: chartData,
      type: 'Candle'
    },
  ],
});
stockChart.appendTo('#element');

