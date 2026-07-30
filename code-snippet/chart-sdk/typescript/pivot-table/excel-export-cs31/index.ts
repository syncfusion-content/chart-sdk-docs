import { PivotView, IDataSet, ExcelExport, BeforeExportEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

//335 or 315
PivotView.Inject(ExcelExport);
let pivotGridObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        enableSorting: true,
        columns: [{ name: 'Year' }],
        values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
        ],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        expandAll: false,
        filters: []
    },
    width: '100%',
    height: 400,
    allowExcelExport: true,
    enableVirtualization: true,
    beforeExport: function (args: BeforeExportEventArgs): void {
        // Store the drilledMembers here(row/column headers that has been expanded).
        let member = pivotGridObj.dataSourceSettings.drilledMembers;
        // Then apply expandAll to the pivot table settings to get all the data including child members.
        pivotGridObj.setProperties(
            { dataSourceSettings: { expandAll: true, drilledMembers: [] } },
            true
        );
        pivotGridObj.engineModule.generateGridData(pivotGridObj.dataSourceSettings, true);
        // Assign that retrieved data to the exporting here.
        args.dataCollections = [pivotGridObj.engineModule.pivotValues];
        // Then set false to expandAll and the stored members to the drilledMembers  to the pivot table settings to get back to the normal state.
        pivotGridObj.setProperties(
            { dataSourceSettings: { expandAll: false, drilledMembers: member } },
            true
        );

    }
});
pivotGridObj.appendTo('#PivotView');
let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#excel');
document.getElementById('excel').onclick = function () {
    pivotGridObj.excelExport();
};