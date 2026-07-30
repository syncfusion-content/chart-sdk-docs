var range = new ej.charts.RangeNavigator({
    valueType: 'DateTime',
    labelPosition: 'Inside',
    value: [new Date("2017-08-13"), new Date("2017-12-28")],
    series: [{
        dataSource: datasrc, xName: 'x', yName: 'y', type: 'StepLine', width: 2,
    }],
});
range.appendTo('#element');

