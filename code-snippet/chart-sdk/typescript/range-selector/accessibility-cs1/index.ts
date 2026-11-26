import {
    Chart,
    RangeNavigator,
    AreaSeries,
    DateTime,
    RangeTooltip,
    IChangedEventArgs
} from '@syncfusion/ej2-charts';
import { datasrc } from './datasource.ts';

Chart.Inject(AreaSeries, DateTime);
RangeNavigator.Inject(AreaSeries, DateTime, RangeTooltip);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift'
    },
    tooltip: {
        enable: true
    },
    legendSettings: {
        visible: false
    },
    series: [
        {
            dataSource: datasrc,
            type: 'Area',
            xName: 'x',
            yName: 'y',
            width: 2,
            name: 'Rate'
        }
    ],
    height: '350'
});

chart.appendTo('#chart');

let rangeNavigator: RangeNavigator = new RangeNavigator({
    valueType: 'DateTime',
    value: [
        new Date('2017-09-01'),
        new Date('2018-02-01')
    ],
    tooltip: {
        enable: true
    },
    enableDeferredUpdate: true,
    series: [
        {
            dataSource: datasrc,
            type: 'Area',
            xName: 'x',
            yName: 'y',
            width: 2
        }
    ],
    changed: (args: IChangedEventArgs): void => {
        chart.primaryXAxis.zoomFactor = args.zoomFactor;
        chart.primaryXAxis.zoomPosition = args.zoomPosition;
        chart.dataBind();
    }
});

rangeNavigator.appendTo('#element');