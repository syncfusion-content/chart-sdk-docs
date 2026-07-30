

import { PivotView, IDataSet, GroupingBar, FieldList, Toolbar, CalculatedField, PDFExport, ExcelExport, PivotActionFailureEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(GroupingBar, FieldList, Toolbar, PDFExport, ExcelExport);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    showGroupingBar: true,
    showFieldList: true,
    allowCalculatedField: true,
    showToolbar: true,
    displayOption: { view: 'Both' },
    toolbar: ['New', 'Save', 'Rename', 'Remove', 'Load',
    'Grid', 'Chart', 'MDX', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'FieldList'],
    allowExcelExport: true,
    allowConditionalFormatting: true,
    allowPdfExport: true,
    actionFailure: (args: PivotActionFailureEventArgs) => {
        if (args.actionName == 'Add new report' || args.actionName == 'Save current report') {
            // Triggers when the current UI action fails to achieve the desired result. 
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



