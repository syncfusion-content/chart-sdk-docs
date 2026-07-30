import { PivotView, IDataSet, PDFExport } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';
import { PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';

PivotView.Inject(PDFExport);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: true,
        drilledMembers: [{ name: 'Year', items: ['FY 2015'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }],
        rows: [{ name: 'Country' }, { name: 'Products' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    allowPdfExport: true,
    height: 320,
    gridSettings: {
        pdfQueryCellInfo: function (args: PdfQueryCellInfoEventArgs) {
            if (args.cell && args.cell.row && args.cell.row.pdfGrid) {
                args.cell.row.pdfGrid.repeatHeader = false;
            }
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function () {
    pivotTableObj.pdfExport();
};
