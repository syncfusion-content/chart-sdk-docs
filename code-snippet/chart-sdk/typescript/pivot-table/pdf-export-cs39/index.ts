


import { PivotView, IDataSet, PDFExport, VirtualScroll } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';
import { PdfHeaderQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';

PivotView.Inject(PDFExport, VirtualScroll);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    allowPdfExport: true,
    enableVirtualization: true,
    height: 320,
    gridSettings: {
        pdfHeaderQueryCellInfo: function (args: PdfHeaderQueryCellInfoEventArgs) {
            if (args.gridCell && args.gridCell.valueSort && args.gridCell.valueSort.levelName === 'FY 2015.Units Sold'
                && args.cell && args.cell.row && args.cell.row.pdfGrid && args.cell.row.pdfGrid.gridColumns
                && args.cell.row.pdfGrid.gridColumns.columns[args.gridCell.colIndex]) {
                args.cell.row.pdfGrid.gridColumns.columns[args.gridCell.colIndex].width = 250;
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
