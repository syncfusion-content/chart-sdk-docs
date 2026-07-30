

import { PivotView, IDataSet, GroupingBar, FieldList, PivotActionCompleteEventArgs, CalculatedField } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(FieldList, CalculatedField);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
        calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(balance)"+"Sum(quantity)"' }]
    },
    showFieldList: true,
    allowCalculatedField: true,
    actionComplete: (args: PivotActionCompleteEventArgs) => {
        if (args.actionName == 'Calculated field applied') {
            // Triggers when the calculated field is applied.
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



