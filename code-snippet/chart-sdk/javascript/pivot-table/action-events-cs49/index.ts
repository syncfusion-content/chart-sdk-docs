

import { PivotView, IDataSet, GroupingBar, FieldList, PivotActionBeginEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(GroupingBar, FieldList);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    showGroupingBar: true,
    showFieldList: true,
    actionBegin: (args: PivotActionBeginEventArgs) => {
        if (args.actionName == 'Sort field' || args.actionName == 'Sort value') {
            args.cancel = true;
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



