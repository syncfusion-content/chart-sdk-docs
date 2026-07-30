

import { PivotView, IDataSet, GroupingBar } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(GroupingBar);
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
    dataBound: function(args) {
        if (pivotTableObj.showGroupingBar) {
            let columns: string[] = [];
            for (let i: number = 1; i < (pivotTableObj.grid as any).columnModel.length; i++) {
                columns.push((pivotTableObj.grid as any).columnModel[i].field);
            }
            pivotTableObj.grid.autoFitColumns(columns);
        }
    },
    showGroupingBar: true,
    height: 350,
    width: 800
});
pivotTableObj.appendTo('#PivotTable');



