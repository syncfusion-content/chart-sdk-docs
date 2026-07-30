var chart = new ej.charts.BulletChart({
      title: 'Sales Rate',
        dataSource: [
        { value: 55, target: 75, category: 'Year 1'  },
        { value: 70, target: 70, category: 'Year 2'  },
        { value: 85, target: 75, category: 'Year 3'  }
        ],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        categoryField: 'category',
        categoryLabelStyle: { color: 'red', size: '13', fontWeight: 'bold'},
        ranges: [ { end: 35, color: 'darkred', opacity: 0.5 },
        { end: 50, color: 'red', opacity: 1 },
        { end: 75, color: 'blue', opacity: 0.7 },
        { end: 90, color: 'lightgreen', opacity: 1 },
        { end: 100, color: 'green', opacity: 1 }
        ],
        minimum: 0, maximum: 100, interval: 10,
        height: '400'
}, '#element');

