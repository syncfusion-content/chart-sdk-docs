


import { RangeNavigator, StepLineSeries, Logarithmic } from "@syncfusion/ej2-charts";
RangeNavigator.Inject(StepLineSeries, Logarithmic);

let data: object[] = [];
let max: number = 100;
for (let i: number = 0; i < 100; i++) {
    data.push({
        x: Math.pow(10, i * 0.1),
        y: Math.floor(Math.random() * (80 - 30 + 1)) + 30
    });
}
let range: RangeNavigator = new RangeNavigator({
    valueType: 'Logarithmic',
    value: [4, 6],
    interval: 1,
    series: [{
        dataSource: data, xName: 'x', yName: 'y', type: 'StepLine', width: 2,
    }],
}, '#element');



