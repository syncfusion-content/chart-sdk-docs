


import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Profit in %',
        dataSource: [
        { value: 50, target: 45, category: 'Year 1'  },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        ranges: [ { end: 15 },
        { end: 50 },
        { end: 100 }
        ],
        theme: 'HighContrast',
        minimum: 0, maximum: 100, interval: 10
}, '#element');



