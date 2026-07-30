


import { RangeNavigator, SplineAreaSeries, DateTime } from "@syncfusion/ej2-charts";
RangeNavigator.Inject(SplineAreaSeries, DateTime);
import { double } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    value: [12, 30],
    series: [{
        dataSource: double,
        xName: 'x', yName: 'y', type: 'SplineArea', width: 2,
    }],
}, '#element');



