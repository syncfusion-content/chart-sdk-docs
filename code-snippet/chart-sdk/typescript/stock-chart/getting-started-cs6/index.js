var stockChart = new ej.charts.StockChart({
 primaryXAxis: {
        //Grid lines customization
        majorGridLines : {
            color : 'blue',
            width : 1
        },
        minorGridLines : {
            color : 'red',
            width : 0
        }
    },
    primaryYAxis: {
        //Grid lines customization
        majorGridLines : {
            color : 'green',
            width : 1
        },
        minorGridLines : {
            color : 'red',
            width : 0
        }
    },
  series: [
    {
      dataSource: chartData,
      type: 'Candle'
    },
  ],
});
stockChart.appendTo('#element');



