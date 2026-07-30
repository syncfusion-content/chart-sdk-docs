

import { PivotView, IDataSet, GroupingBar, Grouping } from '@syncfusion/ej2-pivotview';
import { Group_Data } from './datasource.ts';

PivotView.Inject(GroupingBar, Grouping);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: Group_Data as IDataSet[],
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }],
        rows: [{ name: 'Date' }],
        columns: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        values: [{ name: 'Sold', caption: 'Unit Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
        filters: [{ name: 'Products' }, { name: 'Product_ID', caption: 'Product ID' }]
    },
    showGroupingBar: true,
    allowGrouping: true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



