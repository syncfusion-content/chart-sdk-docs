


var stockChart = new ej.charts.StockChart({
        primaryXAxis: {
            valueType: 'DateTime',
        },
        series: [
            {
                dataSource: trackData, name: 'John', xName: 'x',
                 type: 'Line', width: 2,
                yName: 'y'
            },
            {
                dataSource: trackData, name: 'Andrew', xName: 'x',
                type: 'Line', width: 2,
                yName: 'y1'
            },
            {
                dataSource: trackData, name: 'Thomas', xName: 'x',
                type: 'Line', width: 2,
                yName: 'y2'
            },
            {
                dataSource: trackData, name: 'Mark', xName: 'x',
                type: 'Line', width: 2,
                yName: 'y3'
            },
            {
                dataSource: trackData, name: 'William', xName: 'x',
                type: 'Line', width: 2,
                yName: 'y4'
            }
        ],
        // trackball for chart
        tooltip: { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' },
        crosshair: { enable: true, lineType: 'Vertical' },
        title: 'Average Sales per Person'
}, '#element');



