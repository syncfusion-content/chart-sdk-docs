import { PivotView, PDFExport, IDataSet } from '@syncfusion/ej2-pivotview';
import { PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

PivotView.Inject(PDFExport);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
    },
    width: '100%',
    height: 300,
    allowPdfExport: true,
    gridSettings: {
        pdfQueryCellInfo: function (args: PdfQueryCellInfoEventArgs): void {
            if (args.data && args.data.actualText === 'Sold') {
                if ((args as any).value < 700) {
                    args.style = {
                        backgroundColor: '#df3800',
                        fontFamily: 'Courier',
                        textPenColor: '#FFFFFF'
                    };
                } else {
                    args.style = {
                        backgroundColor: '#00A45A',
                        fontFamily: 'TimesRoman',
                        textPenColor: '#FFFFFF'
                    };
                }
            }
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function (): void {
    pivotTableObj.pdfExport();
};