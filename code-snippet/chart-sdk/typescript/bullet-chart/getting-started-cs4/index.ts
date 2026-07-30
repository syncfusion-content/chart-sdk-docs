


var bulletChart = new ej.charts.BulletChart({
    dataSource: [{ value: 270, target: 250 },],
    valueName: 'value',
    targetName: 'target',
    title: 'Revenue',
    minimum: 0, maximum: 300, interval: 50,
    ranges: [{ end: 100, color: 'red' },
        { end: 200, color: 'blue' },
        { end: 300, color: 'green' }
        ],
});
bulletChart.appendTo('#element');


