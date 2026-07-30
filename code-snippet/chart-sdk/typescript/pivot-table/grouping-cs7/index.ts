

import { PivotView, IDataSet, GroupingBar, Grouping } from '@syncfusion/ej2-pivotview';
import { Group_Data } from './datasource.ts';

PivotView.Inject(GroupingBar, Grouping);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: Group_Data as IDataSet[],
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Product_ID', format: 'N0' }],
        columns: [{ name: 'Product_ID', caption: 'Product ID' }],
        rows: [{ name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Unit Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
        filters: [],
        groupSettings: [{ type: 'Custom', name: 'Products', caption: 'Product catergory', customGroups: [{groupName: 'Clothings', items: ['Gloves', 'Jerseys', 'Shorts']}]}]
    },
    showGroupingBar: true,
    allowGrouping: true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



