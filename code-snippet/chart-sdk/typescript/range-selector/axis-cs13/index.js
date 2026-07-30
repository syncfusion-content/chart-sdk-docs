var data = [];
var value = 0; var point = {};
for (var j = 1; j < 1090; j++) {
    value += (Math.random() * 10 - 5);
    value = value < 0 ? Math.abs(value) : value;
    point = { x: new Date(2000, 0, j), y: value, z: value + 10 };
    data.push(point);
}

var range = new ej.charts.RangeNavigator({
    labelPosition: 'Outside',
    tooltip: { enable: true },
    valueType: 'DateTime',
    intervalType: 'Quarter',
    enableGrouping: true,
    value: [new Date(2001, 0), new Date(2002, 0)],
    dataSource: data,
    xName: 'x',
    yName: 'y'
});
range.appendTo('#element');

