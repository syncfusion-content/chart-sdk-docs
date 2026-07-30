

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data';
import { pivotData } from './datasource.ts';

let result: DataManager = new DataManager({ json: pivotData, adaptor: new JsonAdaptor })
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: result,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



