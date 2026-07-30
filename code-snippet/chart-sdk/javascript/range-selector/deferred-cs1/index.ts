


import { RangeNavigator, Chart, AreaSeries, DateTime, RangeTooltip, IChangedEventArgs } from "@syncfusion/ej2-charts";
Chart.Inject(DateTime, AreaSeries);
RangeNavigator.Inject(AreaSeries, DateTime, RangeTooltip);
import { datasrc } from "./datasource.ts";

let chart: Chart = new Chart(
    {
        primaryXAxis: {
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift'
        },
        series: [{
            dataSource: datasrc, xName: 'x', yName: 'y', width: 2, name: 'Rate', type: 'Area'
        }],
        tooltip: { enable: true },
        height: '350', legendSettings: { visible: false },
    }
);
chart.appendTo('#Chart');
let range: RangeNavigator = new RangeNavigator({
    valueType: 'DateTime',
    value: [new Date('2017-09-01'), new Date('2018-02-01')],
    tooltip: { enable: true },
    enableDeferredUpdate: true,
    series: [{
        dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
    }],
    changed: (args: IChangedEventArgs) => {
        chart.primaryXAxis.zoomFactor = args.zoomFactor;
        chart.primaryXAxis.zoomPosition = args.zoomPosition;
        chart.dataBind();
    },
}, '#element');



