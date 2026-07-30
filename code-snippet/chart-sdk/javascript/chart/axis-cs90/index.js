var chart = new ej.charts.Chart({
      series: [{
                dataSource: numericData,
                xName: 'x', yName: 'y',
                type: 'Column'
            }],
        useGroupingSeparator: true
    }, '#element');

