

import { PivotView, IDataSet, GroupingBar, HeadersSortEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(GroupingBar);
let pivotTableObj: PivotView = new PivotView({
        dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
    showGroupingBar: true,
    height: 350,
    onHeadersSort: (args: HeadersSortEventArgs) => {
        if (args.fieldName == 'Country') {
            args.members = ['United Kingdom', 'Germany'];
            args.IsOrderChanged = true;
        }
        if (args.fieldName == 'Year') {
            args.members = ['FY 2017', 'FY 2015'];
            args.IsOrderChanged = true;
        }
    }
});
pivotTableObj.appendTo('#PivotTable');



