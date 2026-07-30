

import { PivotView, ConditionalFormatting, IDataSet, IConditionalFormatSettings } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';

PivotView.Inject(ConditionalFormatting);
let pivotTableObj: PivotView = new PivotView({
           dataSourceSettings: {
            dataSource: pivotData,
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
            columns: [{ name: 'Year' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' },
            { name: 'Sold', caption: 'Units Sold' }],
            filters: [],
        },
        allowConditionalFormatting: true,
        height: 320,
        conditionalFormatting: (args: IConditionalFormatSettings) => {
            args.style.backgroundColor = "Blue";
            args.value1 = 23459;
        }
});

pivotTableObj.appendTo('#PivotTable');

let btn: Button = new Button({ isPrimary: true });
btn.appendTo('#Formatting');

document.getElementById('Formatting').addEventListener('click', () => {
    pivotTableObj.conditionalFormattingModule.showConditionalFormattingDialog();
});



