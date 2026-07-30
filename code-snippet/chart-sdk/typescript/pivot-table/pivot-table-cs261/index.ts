

import { pivotData } from './datasource.ts';
import {
    PivotView, FieldList, CalculatedField, Toolbar, RemoveReportArgs, NumberFormatting,
    ConditionalFormatting, IDataSet, RenameReportArgs, SaveReportArgs, FetchReportArgs, LoadReportArgs
} from '@syncfusion/ej2-pivotview';

PivotView.Inject(FieldList, CalculatedField, Toolbar, ConditionalFormatting, NumberFormatting);

let pivotTableObj: PivotView = new PivotView({
        dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
    },
        height: 350,
        toolbar: ['Grid','Chart'],
        chartTypes:['Column','Bar','Line','Area'],
        showToolbar: true,
        displayOption:{ view:'Both' },
});
pivotTableObj.appendTo('#PivotTable');



