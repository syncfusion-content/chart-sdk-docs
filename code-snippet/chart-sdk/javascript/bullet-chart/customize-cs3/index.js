var chart = new ej.charts.BulletChart({
       dataSource: [
        { value: 1500, target: 1000, category: 'Year 1'  },
        ],
        animation: { enable: true },
        targetField: 'target',
        valueField: 'value',
        ranges: [ { end: 500 },
        { end: 1500 },
        { end: 2000 }
        ],
        minimum: 0, maximum: 2000, interval: 200
}, '#element');

