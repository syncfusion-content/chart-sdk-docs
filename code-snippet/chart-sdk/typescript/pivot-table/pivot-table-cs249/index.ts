

import { PivotView, IDataSet, GroupingBar } from '@syncfusion/ej2-pivotview';
import { alphanumeric_data } from './datasource.ts';

PivotView.Inject(GroupingBar);
let pivotTableObj: PivotView = new PivotView({
        dataSourceSettings: {
            dataSource: aplhanumeric_data as IDataSet[],
            rows: [{ name: 'Product' }],
            columns: [{ name: 'Unit', dataType: 'number' }],
            values: [{ name: 'Qty 1', type: 'Sum' }, { name: 'Qty 2' }],
             formatSettings: [{ name: 'Amount', format: 'C0' }]
    },
    showGroupingBar: true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



