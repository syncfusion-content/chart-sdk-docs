var chart = new ej.charts.BulletChart({
       enableGroupSeparator: true,
        title: 'Sales Rate',
        dataSource: [{ value: 1500, target: 1300 }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        ranges: [{ end: 500 },
            { end: 1500 },
            { end: 2500 }
        ],
        minimum: 0, maximum: 2500, interval: 250
}, '#element');

