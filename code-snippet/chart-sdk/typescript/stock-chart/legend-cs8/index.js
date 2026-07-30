var stockChart = new ej.charts.StockChart({
        primaryXAxis: {
            valueType: 'DateTime'
        },
        indicatorType : [],
        trendlineType : [],
        series: [
            {
                type: 'Candle',
                dataSource: chartData,
                name: 'China'
            }],
        title: 'Unemployment Rates 1975-2010',
        tooltip: {enable: true},
        legendSettings: {
            visible: true,
            title: 'Countries',
            titlePosition: 'Top',
            titleStyle: {
                fontFamily: 'verdana',
                fontStyle: 'Normal',
                fontWeight: 'Normal',
                size: '15px',
                textAlignment: 'Center',
                color: 'blue',
                textOverflow: 'None'
            },
            maximumTitleWidth: 150
        }
});
stockChart.appendTo('#element');

