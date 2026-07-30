

import { PivotView, VirtualScroll, IDataSet, ExcelExport } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';

PivotView.Inject(ExcelExport, VirtualScroll);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        values: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 320,
    allowExcelExport: true,
    enableVirtualization: true,
    exportComplete: (args: ExportCompleteEventArgs) => {
        if (args.promise !== null) {
            args.promise.then((e: { blobData: Blob }) => {
                console.log(e.blobData);
            });
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#excel');

document.getElementById('excel').onclick = function () {
    let excelExportProperties: ExcelExportProperties = {
        fileName: 'excelexport.xlsx'
    };
    pivotTableObj.excelExport(excelExportProperties, false, null, true);
};


