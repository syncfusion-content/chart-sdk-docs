


import { RangeNavigator, Chart, IChangedEventArgs, PeriodSelector, AreaSeries, DateTime, PeriodSelectorSettingsModel } from '@syncfusion/ej2-charts';
import { EmitType } from '@syncfusion/ej2-base';

RangeNavigator.Inject(
    PeriodSelector, DateTime, AreaSeries
);
import { chartData } from './datasource.ts';
let periodsValue: PeriodSelectorSettingsModel = {
    periods: [
        { text: '1M', interval: 1, intervalType: 'Months' }, { text: '3M', interval: 3, intervalType: 'Months' },
        { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
        { text: '1Y', interval: 1, intervalType: 'Years' },
        { text: '2Y', interval: 2, intervalType: 'Years', selected: true
         },
        { text: 'All' }
    ]
};
let range: RangeNavigator = new RangeNavigator(
        {
        disableRangeSelector: true,
        valueType: 'DateTime',
        series: [
            {
                dataSource: chartData,
                xName: 'x', yName: 'close', type: 'Area', width: 2,

            }
        ], periodSelectorSettings: periodsValue,
        }, '#element');


