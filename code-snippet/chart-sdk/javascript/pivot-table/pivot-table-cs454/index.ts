

import { PivotView, IDataSet, ColumnRenderEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    gridSettings: {
        columnRender: function (args: ColumnRenderEventArgs) {
            for (let i: number = 0; i < args.columns.length; i++) {
                args.columns[i].autoFit = true;
            }
        }
    },
    height: 350,
    width: 800
});
pivotTableObj.appendTo('#PivotTable');



