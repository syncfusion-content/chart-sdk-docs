var data = [];
var max = 100;
for (var i = 0; i < 100; i++) {
    data.push({
        x: Math.pow(10, i * 0.1),
        y: Math.floor(Math.random() * (80 - 30 + 1)) + 30
    });
}

var range = new ej.charts.RangeNavigator({
    valueType: 'Logarithmic',
    value: [4, 6],
    interval: 1,
    series: [{
        dataSource: data, xName: 'x', yName: 'y', type: 'StepLine', width: 2,
    }],
});
range.appendTo('#element');

