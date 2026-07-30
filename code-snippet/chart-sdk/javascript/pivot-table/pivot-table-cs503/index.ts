import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' },
        { name: 'Sold', caption: 'Units Sold' }],
        filters: [],
    },
    width: 250,
    load() {
        pivotTableObj.minWidth = 250;
    },
});
pivotTableObj.appendTo('#PivotTable');
