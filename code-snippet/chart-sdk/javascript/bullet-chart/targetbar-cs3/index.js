var chart = new ej.charts.BulletChart({
    title: 'Sales Rate',
    dataSource: [
        { value: 55, target: 75, category: 'Year 1', color: 'red' },
    ],
    animation: { enable: false },
    targetField: 'target',
    targetColor: 'color',
    targetWidth: 15,
    ranges: [
        { end: 35 },
        { end: 50 },
        { end: 100 }
    ],
    minimum: 0, maximum: 100, interval: 20
}, '#element');


