var range = new ej.charts.RangeNavigator({
    valueType: 'DateTime',
    value: [new Date("2017-08-13"), new Date("2017-12-28")],
    labelFormat: 'y/M/d',
    series: [{
        dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
    }],
});
range.appendTo('#element');

