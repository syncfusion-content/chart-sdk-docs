

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { ExcelExportProperties } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    allowExcelExport: true,
    height: 320
});
let pivotTableObj2: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        rows: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        columns: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    allowExcelExport: true
});
pivotTableObj.appendTo('#PivotTable');
pivotTableObj2.appendTo('#PivotTable2');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#excel');

document.getElementById('excel').onclick = function () {
    let excelExportProperties: ExcelExportProperties = {
        multipleExport: { type: 'NewSheet' }
    };
    let firstGridExport: Promise<any> = pivotTableObj.grid.excelExport(excelExportProperties, true);
    firstGridExport.then((fData: any) => {
        pivotTableObj2.excelExport(excelExportProperties, false, fData);
    });
};



