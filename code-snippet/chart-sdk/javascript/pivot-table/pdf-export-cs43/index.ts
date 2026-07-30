import { PivotView, IDataSet, PDFExport, BeforeExportEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

//335 or 315
PivotView.Inject(PDFExport);
let pivotGridObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
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
    allowPdfExport: true,
    beforeExport: function (args: BeforeExportEventArgs): void {
        let drilledMembers = pivotGridObj.dataSourceSettings.drilledMembers;
        pivotGridObj.setProperties({ dataSourceSettings: { expandAll: true, drilledMembers: [] } }, true);
        pivotGridObj.engineModule.generateGridData(pivotGridObj.dataSourceSettings, true);
        args.dataCollections = [pivotGridObj.engineModule.pivotValues];
        pivotGridObj.setProperties({ dataSourceSettings: { expandAll: false, drilledMembers: drilledMembers } }, true);
    }
});
pivotGridObj.appendTo('#PivotView');
let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function () {
    pivotGridObj.pdfExport();
};