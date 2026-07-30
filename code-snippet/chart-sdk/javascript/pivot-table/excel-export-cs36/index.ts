import { PivotView, ExcelExport, IDataSet } from '@syncfusion/ej2-pivotview';
import { ExcelHeaderQueryCellInfoEventArgs, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

PivotView.Inject(ExcelExport);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        expandAll: false,
        dataSource: pivotData as IDataSet[],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Sold' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]

    },
    width: '100%',
    height: 300,
    showFieldList: true,
    allowExcelExport: true,
    gridSettings: {
        excelHeaderQueryCellInfo: function (args: ExcelHeaderQueryCellInfoEventArgs): void {
            args.style = { rotation: dropDownListObject.value as number };
        },
        excelQueryCellInfo: function (args: ExcelQueryCellInfoEventArgs): void {
            args.style = { rotation: dropDownListObject.value as number };
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#excel');

let degree = [90, 135, 180, 270];
let dropDownListObject: DropDownList = new DropDownList({
    dataSource: degree,
    placeholder: 'Select a degree',
    width: 120
});
dropDownListObject.appendTo('#ddlelement');

document.getElementById('excel').onclick = function (): void {
    pivotTableObj.excelExport();
};