

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { QueryCellInfoEventArgs, HeaderCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { pivotData } from './datasource.ts';

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    gridSettings: {
        queryCellInfo: function (args: QueryCellInfoEventArgs) {
            let colIndex: number = Number(args.cell.getAttribute('data-colindex'));
            let cells: QueryCellInfoEventArgs = args.data[colIndex] ? args.data[colIndex] : {};
            // Here by using 'actualText' option, a custom class can be added to the specific row header and its value to apply custom style.
            if (cells.actualText === 'Germany') {
                args.cell.classList.add('e-custom');
            } else if (cells.actualText === 'Amount' &&
                cells.columnHeaders === 'FY 2016' && cells.rowHeaders === 'Germany') {
                args.cell.classList.add('e-custom');
            }
        },
        headerCellInfo: function (args: HeaderCellInfoEventArgs) {
            let customAttributes: HeaderCellInfoEventArgs = args.cell.column.customAttributes;
            // Here custom class can be added to the specific column header by using unique level name, to apply custom style.
            if (args.node.classList.contains('e-columnsheader') && customAttributes && 
                customAttributes.cell.valueSort.levelName === 'FY 2016.Sold Amount') {
                args.node.classList.add('e-custom');
            }
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



