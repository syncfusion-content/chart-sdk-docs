var bulletChart = new ej.charts.BulletChart({
    dataSource: [{ value: 100, target: 80 },
            { value: 200, target: 180 },
            { value: 300, target: 280 },
            { value: 400, target: 380 },
            { value: 500, target: 480 }],
    valueField: 'value',
    targetField: 'target',
    height: '300',
    minimum: 0, maximum: 500, interval: 50,
});
bulletChart.appendTo('#element');

