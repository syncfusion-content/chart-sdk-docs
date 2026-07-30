

import { PivotView, IDataSet, GroupingBar, FieldList, Toolbar, NumberFormatting,PDFExport, ExcelExport,
    ConditionalFormatting, PivotActionCompleteEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(FieldList, Toolbar, PDFExport, ExcelExport, ConditionalFormatting);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    showFieldList: true,
    displayOption: { view: 'Both' },
    toolbar: ['New', 'Save', 'Rename', 'Remove', 'Load',
    'Grid', 'Chart', 'MDX', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'FieldList'],
    allowExcelExport: true,
    allowConditionalFormatting: true,
    allowPdfExport: true,
    showToolbar: true,
    actionComplete: (args: PivotActionCompleteEventArgs) => {
        if (args.actionName == 'New report added' || args.actionName == 'Report saved') {
            // Triggers when the toolbar UI actions such as add new report and save current report icon are completed.
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



