


import { RangeNavigator, AreaSeries, DateTime } from "@syncfusion/ej2-charts";
RangeNavigator.Inject(AreaSeries, DateTime);
import { datasrc } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    valueType: 'DateTime',
    value: [new Date('2017-09-01'), new Date('2018-02-01')],
    labelFormat: 'MMM-yy',
    series: [{
        dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
    }],
}, '#element');



