


var stockChart = new ej.charts.StockChart({
        primaryXAxis: {
            valueType: 'DateTime',
        },
        series: [
            {
                type: 'Candle', width: 2, name: 'Temperature',
                dataSource: series1, xName: 'x', yName: 'y'
            }
        ],
        //crosshair for chart
        crosshair: { enable: true },
        legendSettings: { visible: true },
        title: 'Weather Condition'
}, '#element');



