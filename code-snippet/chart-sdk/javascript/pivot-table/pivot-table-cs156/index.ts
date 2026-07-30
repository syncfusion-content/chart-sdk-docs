

import { PivotView, IDataSet, GroupingBar, memberEditorOpenEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(GroupingBar);
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
    memberEditorOpen: (args: memberEditorOpenEventArgs) => {
       if (args.fieldName == 'Country') {
            args.fieldMembers = args.fieldMembers.filter((key) => {
                return (key.actualText == 'France' || key.actualText == 'Germany')
            });
       }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



