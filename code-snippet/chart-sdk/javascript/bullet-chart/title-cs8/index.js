var chart = new ej.charts.BulletChart({
       title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 45, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        labelFormat: '${value}',
        subtitleStyle: { size: '22', color: 'red', fontFamily: 'Italic', fontWeight: 'Bold'},
        ranges: [ { end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');

