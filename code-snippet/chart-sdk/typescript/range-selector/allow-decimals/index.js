var data = [];
for (var i = 1; i <= 10; i++) {
  data.push({ x: i, y: i * 2 });
}

var range = new ej.charts.RangeNavigator({
    valueType: 'Double',
    allowDecimals: false,
    series: [{ dataSource: data, xName: 'x', yName: 'y', type: 'Area' }],
});
range.appendTo('#element');

