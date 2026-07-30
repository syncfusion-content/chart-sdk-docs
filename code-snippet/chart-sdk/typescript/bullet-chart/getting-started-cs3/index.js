var bulletChart = new ej.charts.BulletChart({
    dataSource: [{ value: 270, target: 250 },],
    valueField: 'value',
    targetField: 'target',
    title: 'Revenue',
    minimum: 0, maximum: 300, interval: 50,
});
bulletChart.appendTo('#element');

