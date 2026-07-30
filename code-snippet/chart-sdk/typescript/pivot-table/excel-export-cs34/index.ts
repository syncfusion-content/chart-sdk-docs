import { PivotView, ExcelExport, IDataSet, BeforeExportEventArgs, IAxisSet } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

PivotView.Inject(ExcelExport);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        expandAll: false,
        dataSource: pivotData as IDataSet[],
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
    },
    width: '100%',
    height: 300,
    showFieldList: true,
    allowExcelExport: true,
    beforeExport: function (args: BeforeExportEventArgs): void {
        for (let i: number = 0; i < args.dataCollections.length; i++) {
            const pivotValue: IAxisSet[] = args.dataCollections[i];
            for (let j: number = 0; j < pivotValue.length; j++) {
                const row: any = pivotValue[j];
                pivotValue[j] = row.filter((item: any) => {
                    return item !== null && (item.axis !== 'row');
                });
            }
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#excel');
document.getElementById('excel').onclick = function (): void {
    pivotTableObj.excelExport();
};