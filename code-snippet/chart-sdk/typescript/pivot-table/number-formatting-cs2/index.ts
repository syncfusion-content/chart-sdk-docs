

import { PivotView, NumberFormatting, FieldList, IDataSet } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';

PivotView.Inject(NumberFormatting, FieldList);
let pivotTableObj: PivotView = new PivotView({
           dataSourceSettings: {
            dataSource: pivotData,
            expandAll: false,
            enableSorting: true,
            formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false, currency: 'EUR' }],
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
            columns: [{ name: 'Year' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' },
            { name: 'Sold', caption: 'Units Sold' }],
            filters: []
        },
        showFieldList: true,
        allowNumberFormatting: true,
        numberFormatting: function (args: NumberFormattingEventArgs) {
        if(args.formatName === 'Amount') {
            args.cancel = true;
        }
    },
        height: 420
});

pivotTableObj.appendTo('#PivotTable');

let btn: Button = new Button({ isPrimary: true });
btn.appendTo('#Formatting');

document.getElementById('Formatting').addEventListener('click', () => {
    pivotTableObj.numberFormattingModule.showNumberFormattingDialog();
});



