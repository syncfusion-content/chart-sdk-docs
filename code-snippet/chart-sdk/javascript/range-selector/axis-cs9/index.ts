


import { RangeNavigator, AreaSeries, DateTime } from "@syncfusion/ej2-charts";
RangeNavigator.Inject(AreaSeries, DateTime);
import { datasrc } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    valueType: 'DateTime',
    intervalType: 'Months',
    interval: 2,
    value: [new Date("2017-08-13"), new Date("2017-12-28")],
    series: [{
        dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
    }],
}, '#element');



