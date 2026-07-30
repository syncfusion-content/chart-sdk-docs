

import { PivotView, IDataSet, GroupingBar } from '@syncfusion/ej2-pivotview';
import { noData } from './datasource.ts';

PivotView.Inject(GroupingBar);
let pivotTableObj: PivotView = new PivotView({
        dataSourceSettings: {
        dataSource: noData as IDataSet[],
        expandAll: true,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        columns: [{ name: 'Date', showNoDataItems: true}],
        values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
        filters: [],
        emptyCellsTextContent:'**'
    },
    height: 350,
    load(args: LoadEventArgs): void {
        args.dataSourceSettings.columns[0].caption = 'Total Population';
        args.dataSourceSettings.emptyCellsTextContent = '###'
    },
});
pivotTableObj.appendTo('#PivotTable');



