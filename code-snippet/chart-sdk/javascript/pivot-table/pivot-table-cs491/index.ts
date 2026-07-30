

import { PivotView, IDataSet, GroupingBar, FieldList, LoadEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(GroupingBar, FieldList);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
    },
    showGroupingBar: true,
    showFieldList: true,
    height: 350,
    load(args: LoadEventArgs): void {
        args.defaultFieldListOrder = 'Descending';
    }
});
pivotTableObj.appendTo('#PivotTable');



