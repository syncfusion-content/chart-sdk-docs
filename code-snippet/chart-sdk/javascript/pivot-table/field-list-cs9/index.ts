

import { PivotView, IDataSet, PivotFieldList } from '@syncfusion/ej2-pivotview';

let data: Function = (count: number) => {
    let result: Object[] = [];
    let dt: number = 0;
    for (let i: number = 1; i < (count + 1); i++) {
        dt++;
        let round: string;
        let toString: string = i.toString();
        if (toString.length === 1) {
            round = '0000' + (i);
        }
        else if (toString.length === 2) {
            round = '000' + i;
        }
        else if (toString.length === 3) {
            round = '00' + i;
        } else if (toString.length === 4) {
            round = '0' + i;
        } else {
            round = toString;
        }
        result.push({
            ProductID: 'PRO-' + round,
            Year: "FY " + (dt + 2013),
            Price: Math.round(Math.random() * 5000) + 5000,
            Sold: Math.round(Math.random() * 80) + 10,
        });
        if (dt / 4 == 1) {
            dt = 0;
        }
    }
    return result;
};
let pivotObj: PivotView = new PivotView({
    enginePopulated: () => {
        if (fieldListObj) {
            fieldListObj.update(pivotObj);
        }
    },
    enableVirtualization: true,
    height: 350
});
pivotObj.appendTo('#PivotTable');
let fieldListObj: PivotFieldList = new PivotFieldList({
    dataSourceSettings: {
        dataSource: data(1000) as IDataSet[],
        rows: [{ name: 'ProductID' }],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }]
    },
    renderMode: 'Fixed',
    load: (): void => {
        this.pivotGridModule = pivotObj;
        //Assigning report to pivot table component.
        pivotObj.dataSourceSettings = fieldListObj.dataSourceSettings;
        //Generating page settings based on pivot table component’s size.
        pivotObj.updatePageSettings(true);
        //Assigning page settings to field list component.
        fieldListObj.pageSettings = pivotObj.pageSettings;
    },
    enginePopulated: (): void => {
        fieldListObj.updateView(pivotObj);
    }
});
fieldListObj.appendTo('#Static_FieldList');



