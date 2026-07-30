


import { RangeNavigator, AreaSeries, DateTime, RangeTooltip } from "@syncfusion/ej2-charts";
RangeNavigator.Inject(AreaSeries, DateTime, RangeTooltip);
import { datasrc } from "./datasource.ts";

let range: RangeNavigator = new RangeNavigator({
    valueType: 'DateTime',
    value: [new Date('2017-09-01'), new Date('2018-02-01')],
    tooltip: { enable: true },
    labelFormat: 'MMM-yy',
    navigatorStyleSettings: {
        thumb: {
            type: 'Rectangle',
            border: { width: 2, color: 'red' },
            fill: 'pink'
        }
    },
    series: [{
        dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
    }],
}, '#element');



