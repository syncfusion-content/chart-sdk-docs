import { PivotView, IDataSet, PdfExportProperties, FieldList, PDFExport } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { salesData } from './datasource.ts';

PivotView.Inject(FieldList, PDFExport);

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: salesData as IDataSet[],
        expandAll: false,
        rows: [{ name: 'Region', caption: 'Region' }],
        columns: [{ name: 'Product', caption: 'Product' }],
        values: [
            { name: 'Sales', caption: 'Q4 Sales' },
            { name: 'ProfitMargin', caption: 'Profit Margin' }
        ],
        formatSettings: [
            { name: 'Sales', format: 'C0' },
            { name: 'ProfitMargin', format: '0\'%\'' }
        ],
        filterSettings: [{ name: 'Product', items: ['Laptop'], type: 'Include' }]
    },
    width: '100%',
    height: 300,
    allowPdfExport: true,
    showFieldList: true
});
pivotTableObj.appendTo('#PivotTable1');

let pivotTableObj2: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: salesData as IDataSet[],
        expandAll: false,
        rows: [{ name: 'Region', caption: 'Region' }],
        columns: [{ name: 'Product', caption: 'Product' }],
        values: [
            { name: 'Units', caption: 'Units Sold' },
            { name: 'Sales', caption: 'Q4 Sales' }
        ],
        formatSettings: [
            { name: 'ProfitMargin', format: '0\'%\'' },
            { name: 'Sales', format: 'C0' }
        ],
        filterSettings: [{ name: 'Product', items: ['Smartphone'], type: 'Include' }]
    },
    width: '100%',
    height: 300,
    allowPdfExport: true,
    showFieldList: true
});
pivotTableObj2.appendTo('#PivotTable2');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

const pdfExportProperties: PdfExportProperties = {
    multipleExport: { type: 'NewPage' },
    pivotTableIds: ['PivotTable1', 'PivotTable2']
};

document.getElementById('pdf').onclick = function () {
    pivotTableObj.pdfExport(pdfExportProperties, true);
};
