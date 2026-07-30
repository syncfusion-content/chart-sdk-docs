

import { PivotView, IDataSet, FieldList, PivotActionCompleteEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(FieldList);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    showFieldList: true,
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog' },
    actionComplete: (args: PivotActionCompleteEventArgs) => {
        if (args.actionName == 'New record added' || args.actionName == 'Edited records saved') {
            // Triggers when the editing UI actions such as add and edit are completed.
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



