


import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
  title: 'Sales Rate',
  dataSource: [
    { value: 55, target: 75, category: 'Year 1' },
    { value: 70, target: 70, category: 'Year 2' },
    { value: 85, target: 75, category: 'Year 3' }
  ],
  animation: { enable: false },
  valueField: 'value',
  targetField: 'target',
  categoryField: 'category',
  categoryLabelStyle: { color: 'red', size: '13', fontWeight: 'bold' },
  ranges: [{ end: 35 },
  { end: 50 },
  { end: 100 }
  ],
  minimum: 0, maximum: 100, interval: 20,
  height: '400'
}, '#element');



