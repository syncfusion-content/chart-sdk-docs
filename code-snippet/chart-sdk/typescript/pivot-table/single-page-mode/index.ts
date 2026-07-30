import { PivotView, VirtualScroll, IDataSet } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(VirtualScroll);

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData(1000) as IDataSet[],
        enableSorting: false,
        expandAll: true,
        formatSettings: [{ name: 'Price', format: 'C0' }],
        rows: [{ name: 'ProductID' }],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }]
    },
    width: '100%',
    height: 350,
    enableVirtualization: true,
    virtualScrollSettings: {
        allowSinglePage: true
    }
});
pivotTableObj.appendTo('#PivotTable');