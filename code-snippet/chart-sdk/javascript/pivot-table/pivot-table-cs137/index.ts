

import { PivotView, IDataSet, editCompleted, EditCompletedEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(DrillThrough);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal' },
    height: 350,
    editCompleted:(args:EditCompletedEventArgs){
        //triggers when a value cell is editted.
    }
});
pivotTableObj.appendTo('#PivotTable');



