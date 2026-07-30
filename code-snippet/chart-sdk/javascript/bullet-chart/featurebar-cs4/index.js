var chart = new ej.charts.BulletChart({
        title: 'Sales Rate',
        dataSource: [
                { value: 55, target: 75, category: 'Year 1', color: 'blue' },
        ],
        animation: { enable: false },
        valueField: 'value',
        ranges: [
                { end: 35 },
                { end: 50 },
                { end: 100 }
        ],
        valueFill: 'color',
        valueHeight: 15,
        minimum: 0, maximum: 100, interval: 20
}, '#element');

