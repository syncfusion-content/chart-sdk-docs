


import { RangeNavigator, SplineSeries, DateTime } from "@syncfusion/ej2-charts";
RangeNavigator.Inject(SplineSeries, DateTime);
import { double } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    value: [12, 30],
    series: [{
        dataSource: double,
        xName: 'x', yName: 'y', type: 'Spline', width: 2,
    }],
}, '#element');



