

import { PivotView, IDataSet, PivotFieldList } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

let pivotTableObj: PivotView = new PivotView({
    allowDeferLayoutUpdate: true,
    enginePopulated: () => {
        if (fieldlistObj) {
            fieldlistObj.update(pivotTableObj);
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');
let fieldlistObj: PivotFieldList = new PivotFieldList({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    allowDeferLayoutUpdate: true,
    renderMode: 'Fixed',
    enginePopulated: (): void => {
        if (fieldlistObj.isRequiredUpdate) {
            fieldlistObj.updateView(pivotTableObj);
        }
        pivotTableObj.notify('ui-update', pivotTableObj);
        fieldlistObj.notify('tree-view-update', fieldlistObj);
    }
});
fieldlistObj.appendTo('#Static_FieldList');



