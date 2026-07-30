

import { BulletChart } from '@syncfusion/ej2-charts';
let bulletChart: BulletChart = new BulletChart({
    dataSource: [{ value: 270, target: 250 },],
    valueField: 'value',
    targetField: 'target',
    title: 'Revenue',
    minimum: 0, maximum: 300, interval: 50,
});
bulletChart.appendTo('#element');


