var stockChart = new ej.charts.StockChart({
        primaryXAxis: {
            valueType: 'DateTime',
        },
        series: [
            {
                dataSource: chartData, type: 'Line', xName: 'date', yName: 'high'
            },
            {
                dataSource: chartData, type: 'Line', xName: 'date', yName: 'low',
                 yAxisName: 'yAxis',
            }
        ],
         // Initializing multiple axis
       axes:[
        {
            rowIndex: 0,
            name: 'yAxis',
        }
       ],
        crosshair: {
            enable: true
        },
        title: 'Multiple Axis',
    });
stockChart.appendTo('#element');

