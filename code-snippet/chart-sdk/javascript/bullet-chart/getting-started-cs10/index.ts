

import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let bulletChart: BulletChart = new BulletChart({
    tooltip: { enable: true },
    dataSource: [{ value: 70, target: 50 }],
    valueField: 'value',
    targetField: 'target',
    animation: { enable: false },
    ranges: [{ end: 30, color: '#599C20' },
        { end: 60, color: '#EFC820' },
        { end: 100, color: '#CA4218' }
    ],
    minimum: 0, maximum: 100, interval: 10,
    title: 'Revenue YTD'
});
bulletChart.appendTo('#element');


