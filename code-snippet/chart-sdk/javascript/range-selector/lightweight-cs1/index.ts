


import { RangeNavigator, DateTime } from '@syncfusion/ej2-charts';
import { GetDateTimeData } from './datasource.ts';
RangeNavigator.Inject(DateTime);

let range: RangeNavigator = new RangeNavigator(
    {
        valueType: 'DateTime',
        intervalType: 'Months',
        labelFormat: 'MMM',
        labelStyle: { color: 'red', size: '10px' },
        value: [new Date(2018, 5, 1), new Date(2018, 6, 1)],
        dataSource: GetDateTimeData(new Date(2018, 0, 1), new Date(2019, 0, 1)),
        xName: 'x', yName: 'y'
    }, '#element');


