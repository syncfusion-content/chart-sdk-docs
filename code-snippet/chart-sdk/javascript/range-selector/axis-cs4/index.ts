


import { RangeNavigator, StepLineSeries, DateTime } from "@syncfusion/ej2-charts";
RangeNavigator.Inject(StepLineSeries, DateTime);
import { double } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    // Custom label format
    labelFormat: '{value}$',
    value: [12, 30],
    series: [{
        dataSource: double,
        xName: 'x', yName: 'y', type: 'StepLine', width: 2,
    }],
}, '#element');



