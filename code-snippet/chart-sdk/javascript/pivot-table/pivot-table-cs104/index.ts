

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data';
import { pivotData } from './datasource.ts';

let result: DataManager = new DataManager({ json: pivotData, adaptor: new JsonAdaptor })
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: result,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



