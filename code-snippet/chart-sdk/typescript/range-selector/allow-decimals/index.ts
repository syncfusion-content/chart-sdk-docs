import { RangeNavigator, AreaSeries } from '@syncfusion/ej2-charts';

RangeNavigator.Inject(AreaSeries);

let data: Object[] = [];
for (let i: number = 1; i <= 10; i++) {
  data.push({ x: i, y: i * 2 });
}

let rangeNavigator: RangeNavigator = new RangeNavigator(
  {
    valueType: 'Double',
    allowDecimals: false,
    series: [{ dataSource: data, xName: 'x', yName: 'y', type: 'Area' }],
  },
  '#element'
);
