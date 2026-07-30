var range = new ej.charts.RangeNavigator({
    valueType: 'DateTime',
    labelFormat: 'dd-MMM',
    series: [{
        dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
    }],
});
range.appendTo('#element');

