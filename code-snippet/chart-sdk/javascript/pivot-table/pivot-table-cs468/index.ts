

import { PivotView, IDataSet, GroupingBar } from '@syncfusion/ej2-pivotview';
import { alphanumeric_data } from './datasource.ts';

PivotView.Inject(GroupingBar);
let pivotTableObj: PivotView = new PivotView({
        dataSourceSettings: {
            dataSource: alphanumeric_data as IDataSet[],
            rows: [{ name: 'ProductID', dataType: 'number' }],
            columns: [{ name: 'Country' }],
            values: [{ name: 'Sold', caption:'Units Sold' }, { name: 'Amount', caption:'Sold Amount' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }]
    },
    showGroupingBar: true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



