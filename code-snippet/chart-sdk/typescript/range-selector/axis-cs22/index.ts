


import { RangeNavigator, ColumnSeries, DateTime } from "@syncfusion/ej2-charts";
RangeNavigator.Inject(ColumnSeries, DateTime);
import { double } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    value: [12, 30],
    series: [{
        dataSource: double,
        xName: 'x', yName: 'y', type: 'Column', width: 2,
    }],
}, '#element');



