


import { RangeNavigator, StepLineSeries } from "@syncfusion/ej2-charts";
RangeNavigator.Inject(StepLineSeries);

let range: RangeNavigator = new RangeNavigator({
  minimum: 10, maximum: 160, interval: 10,
  value: [60, 100],
  series: [{
    dataSource: [
      { xData: 10, yData: 35 }, { xData: 20, yData: 28 },
      { xData: 30, yData: 34 }, { xData: 40, yData: 32 },
      { xData: 50, yData: 40 }, { xData: 60, yData: 30 },
      { xData: 70, yData: 4 }, { xData: 80, yData: 22 },
      { xData: 90, yData: 30 }, { xData: 100, yData: 43 },
      { xData: 110, yData: 60 }, { xData: 120, yData: 33 },
      { xData: 130, yData: 40 }, { xData: 140, yData: 29 },
      { xData: 150, yData: 10 }, { xData: 160, yData: 16 },
    ],
    xName: 'xData', yName: 'yData', type: 'StepLine', width: 2,
  }],
}, '#element');



