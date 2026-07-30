

import { PivotView, IDataSet, PDFExport } from '@syncfusion/ej2-pivotview';
import { Group_Data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

PivotView.Inject(PDFExport);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: Group_Data as IDataSet[],
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Date', type: 'date', format: "EEE, MMM d, ''yy" }],
        rows: [{ name: 'Date' }],
        columns: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        values: [{ name: 'Sold', caption: 'Unit Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    },
    allowPdfExport: true,
    height: 500,
    width: 1000
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function (): void {
    pivotTableObj.pdfExport();
};

