import { PivotView, ExcelExport, IDataSet, ColumnRenderEventArgs, ExcelExportProperties } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

PivotView.Inject(ExcelExport);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
    },
    width: '100%',
    height: 300,
    showFieldList: true,
    allowExcelExport: true,
    gridSettings: {
        columnRender: function (args: ColumnRenderEventArgs) {
            // Specific column(s) can be hidden by checking their level name and setting its visible property accordingly.
            for (let i = 1; i < args.columns.length; i++) {
                if (args.stackedColumns[i].customAttributes &&
                    (args.stackedColumns[i].customAttributes.cell as any).valueSort.levelName === 'FY 2016.Units Sold') {
                    args.stackedColumns[i].visible = false;
                }
            }
        }
    },
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#excel');
document.getElementById('excel').onclick = function (): void {
    let excelExportProperties: ExcelExportProperties = {
        includeHiddenColumn: false
    };
    pivotTableObj.excelExport(excelExportProperties);
};