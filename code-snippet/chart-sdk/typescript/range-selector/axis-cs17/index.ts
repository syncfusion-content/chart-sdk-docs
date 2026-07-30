


import { RangeNavigator, DateTime, LineSeries } from "@syncfusion/ej2-charts";
RangeNavigator.Inject(DateTime, LineSeries);
import { datasrc } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    valueType: 'DateTime',
    value: [new Date('2017-09-01'), new Date('2018-02-01')],
    labelFormat: 'MMM-yy',
    series: [{
        dataSource: datasrc, xName: 'x', yName: 'y', type: 'Line', width: 2,
    }],
}, '#element');



