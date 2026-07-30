

import { PivotView, IDataSet, PivotFieldList } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';

let pivotTableObj: PivotView = new PivotView({
    enginePopulated: () => {
        if (fieldlistObj) {
            fieldlistObj.update(pivotTableObj);
        }
    },
    height: 320
});
pivotTableObj.appendTo('#PivotTable');
let fieldlistObj: PivotFieldList = new PivotFieldList({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    renderMode: 'Popup',
    target: '#PivotFieldList',
    enginePopulated: (): void => {
        fieldlistObj.updateView(pivotTableObj);
    }
});
fieldlistObj.appendTo('#PivotFieldList');

let fieldListBtn: Button = new Button({ isPrimary: true });
fieldListBtn.appendTo('#fieldlistbtn');

document.getElementById('fieldlistbtn').onclick = function () {
    fieldlistObj.dialogRenderer.fieldListDialog.show();
};



