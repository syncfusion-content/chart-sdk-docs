import { PivotView, ExcelExport, IDataSet } from '@syncfusion/ej2-pivotview';
import { ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

PivotView.Inject(ExcelExport);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
    },
    width: '100%',
    height: 300,
    allowExcelExport: true,
    gridSettings: {
        excelQueryCellInfo: function (args: ExcelQueryCellInfoEventArgs): void {
            if (args.cell && (args.cell as any).actualText === 'Sold') {
                if ((args as any).value < 700) {
                    args.style = {
                        backColor: '#df3800',
                        fontName: 'Biome',
                        fontColor: '#FFFFFF',
                        borders: { color: '#8B1E00', lineStyle: 'thin' }
                    };
                } else {
                    args.style = {
                        backColor: '#00A45A',
                        fontName: 'Nirmala UI',
                        fontColor: '#FFFFFF',
                        borders: { color: '#00663A', lineStyle: 'thin' }
                    };
                }
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