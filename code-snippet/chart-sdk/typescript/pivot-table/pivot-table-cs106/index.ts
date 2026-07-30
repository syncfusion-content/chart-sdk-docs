

import { PivotView } from '@syncfusion/ej2-pivotview';
import '../../../node_modules/es6-promise/dist/es6-promise';
import { csvdata } from './datasource.ts';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

let pivotObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: getCSVData(),
        type: 'CSV',
        expandAll: false,
        formatSettings: [{ name: 'Total Cost', format: 'C0' }, { name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
        drilledMembers: [{ name: 'Item Type', items: ['Baby Food'] }],
        rows: [
            { name: 'Region' },
            { name: 'Country' }
        ],
        columns: [
            { name: 'Item Type' },
            { name: 'Sales Channel' }
        ],
        values: [
            { name: 'Total Cost' },
            { name: 'Total Revenue' },
            { name: 'Total Profit' }
        ],
        filters: []
    },
    height: 290,
    width: '100%'
});
pivotObj.appendTo('#PivotTable');
function getCSVData(): string[][] {
    let dataSource: string[][] = [];
    let jsonObject: string[] = csvdata.split(/\r?\n|\r/);
    for (let i: number = 0; i < jsonObject.length; i++) {
        if (!isNullOrUndefined(jsonObject[i]) && jsonObject[i] !== '') {
            dataSource.push(jsonObject[i].split(','));
        }
    }
    return dataSource;
}



