

import { pivotData } from './datasource.ts';
import {
    PivotView, FieldList, CalculatedField, Toolbar, RemoveReportArgs, NumberFormatting,
    ConditionalFormatting, IDataSet, RenameReportArgs, SaveReportArgs, FetchReportArgs, LoadReportArgs
} from '@syncfusion/ej2-pivotview';

PivotView.Inject(FieldList, CalculatedField, Toolbar, ConditionalFormatting, NumberFormatting);

let pivotTableObj: PivotView = new PivotView({
        dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false, currency: 'EUR' }],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
    height: 450,
    toolbar: ['Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'NumberFormatting', 'FieldList'],
    allowExcelExport: true,
    allowNumberFormatting: true,
    allowConditionalFormatting: true,
    allowPdfExport: true,
    showToolbar: true,
    allowCalculatedField: true,
    displayOption:{ view:'Both' },
    showFieldList: true,
    gridSettings: { columnWidth: 140 }
});
pivotTableObj.appendTo('#PivotTable');



