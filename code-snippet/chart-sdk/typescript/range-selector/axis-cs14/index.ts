


import { RangeNavigator, DateTime, RangeTooltip } from '@syncfusion/ej2-charts';
RangeNavigator.Inject(DateTime, RangeTooltip);

let data: object[] = [];
let value: number = 0; let point: object = {};
for (let j: number = 1; j < 1090; j++) {
    value += (Math.random() * 10 - 5);
    value = value < 0 ? Math.abs(value) : value;
    point = { x: new Date(2000, 0, j), y: value, z: value + 10 };
    data.push(point);
}
let range: RangeNavigator = new RangeNavigator(
    {
        labelPosition: 'Outside',
        tooltip: { enable: true },
        valueType: 'DateTime',
        intervalType: 'Quarter',
        enableGrouping: true,
        groupBy: 'Years',
        value: [new Date(2001, 0), new Date(2002, 0)],
        dataSource: data,
        xName: 'x',
        yName: 'y'
    }, '#element');



