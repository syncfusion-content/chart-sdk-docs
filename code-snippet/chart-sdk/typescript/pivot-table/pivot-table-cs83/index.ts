

import { PivotView, IDataSet, FieldList } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(FieldList);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
    },
    showFieldList: true,
    dataBound: (): void => {
        if (pivotTableObj && pivotTableObj.dataSourceSettings.values.length === 0) {
            (pivotTableObj.pivotFieldListModule.dialogRenderer as any).onShowFieldList();
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



