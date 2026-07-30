var stockChart = new ej.charts.StockChart({
 primaryXAxis: {
            valueType: 'DateTime',
        },
        series: [
            {
                dataSource: chartData, yName: 'open',
                 type: 'Line', width: 2,
            },
            {
                dataSource: chartData, yName: 'close',
                type: 'Line', width: 2,
            },
            {
                dataSource: chartData, yName: 'high',
                type: 'Line', width: 2,
            },
            {
                dataSource: chartData, yName: 'low',
                type: 'Line', width: 2,
            }
        ],
        // trackball for chart
        tooltip: { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' },
        crosshair: { enable: true, lineType: 'Vertical' },
        title: 'Average Sales per Person'
});
stockChart.appendTo('#element');

