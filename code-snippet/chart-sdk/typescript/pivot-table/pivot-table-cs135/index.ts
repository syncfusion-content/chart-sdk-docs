

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { pivot_flatdata } from './datasource.ts';

let pivotGridObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivot_flatdata as IDataSet[],
        expandAll: true,
        rows: [{ name: 'Country'}],
        columns: [{ name: 'Date' }, { name: 'Product' }],
        values: [{ name: 'Quantity' caption: 'Units Sold' },{ name: 'Amount' caption: 'Sold Amount' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        showColumnSubTotals:false
    },
    height: 350,
    editSettings: {  allowEditing: true, allowInlineEditing:true }
});
pivotGridObj.appendTo('#PivotTable');



