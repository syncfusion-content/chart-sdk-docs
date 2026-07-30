var stockChart = new ej.charts.StockChart({
  primaryXAxis: {

   //Tick lines customization
        majorTickLines : {
            color : 'blue',
            width : 5
        },
        minorTickLines : {
            color : 'red',
            width : 0
        }
  },
     primaryYAxis: {
    //Grid lines customization
        majorTickLines : {
            color : 'green',
            width : 5
        },
        minorTickLines : {
            color : 'red',
            width : 0
        },
     },
  series: [
    {
      dataSource: chartData,
      type: 'Candle'
    },
  ],

});
stockChart.appendTo('#element');

