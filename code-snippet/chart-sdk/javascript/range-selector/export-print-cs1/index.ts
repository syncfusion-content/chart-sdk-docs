


import { SplineSeries, AreaSeries, DateTime, Crosshair } from '@syncfusion/ej2-charts';
import { RangeNavigator, Chart, IChangedEventArgs } from '@syncfusion/ej2-charts';
import {  RangeTooltip, Tooltip } from '@syncfusion/ej2-charts';
import { bitCoinData } from './datasource.ts';
RangeNavigator.Inject(AreaSeries, DateTime, RangeTooltip);

let range: RangeNavigator = new RangeNavigator(
    {
        valueType: 'DateTime',
        value: [new Date(2017, 8, 1), new Date(2018, 1, 1)],
        tooltip: { enable: true },
        series: [
            {
                dataSource: bitCoinData, xName: 'x', yName: 'y', type: 'Area',
                width: 2, animation: { enable: false }
            }
        ],
    }
);
range.appendTo('#element');

 document.getElementById('export').onclick = () => {
        range.export('PNG', 'result',  null, [range]);
    };




