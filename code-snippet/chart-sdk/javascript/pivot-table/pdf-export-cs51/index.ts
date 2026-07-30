import { PivotView, IDataSet, PDFExport, QueryCellInfoEventArgs } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';
import { PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';

PivotView.Inject(PDFExport);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: true,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        columns: [{ name: 'Date', showNoDataItems: true }],
        values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
        filters: [],
        emptyCellsTextContent: '**'
    },
    allowPdfExport: true,
    height: 450,
    gridSettings: {
        queryCellInfo: function (args: QueryCellInfoEventArgs) {
            const colIndex = Number(args.cell.getAttribute('aria-colindex'));
            const currentCell = args.data[colIndex - 1];
            if (currentCell.formattedText === '**' &&
                currentCell.actualText === 'Quantity' &&
                ['Canada.New Mexico', 'United States.British Columbia'].includes(currentCell.rowHeaders)) {
                args.rowSpan = 2;
                args.colSpan = 2;
            }
        },
        pdfQueryCellInfo: function (args: PdfQueryCellInfoEventArgs) {
            if (args.value === '**' &&
                args.data.actualText === 'Quantity' &&
                ['Canada.New Mexico', 'United States.British Columbia'].includes(args.data.rowHeaders)) {
                args.cell.rowSpan = 2;
                args.cell.colSpan = 2;
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
