 var stockChart = new ej.charts.StockChart({
//Initializing Primary X Axis
          //Initializing Primary X Axis
        primaryXAxis: {
             isInversed: true
        },

        //Initializing Primary Y Axis
        primaryYAxis:
        {
             isInversed: true
        },
  series: [
    {
      dataSource: chartData,
      type: 'Candle'
    },
  ],
    });
    stockChart.appendTo('#element');

