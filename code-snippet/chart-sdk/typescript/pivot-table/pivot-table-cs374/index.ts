

import { PivotView, IDataSet, FieldList, GroupingBar } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(FieldList);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        columns: [{ name: 'Date', caption: 'Date' }, { name: 'Product' }],
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        filters: [{ name: 'Quarter' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'State' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity', caption: 'Quantity' }]
    },
    showFieldList: true,
    showGroupingBar:true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



