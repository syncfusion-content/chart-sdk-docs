

import { PivotView, IDataSet, Toolbar } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

PivotView.Inject(Toolbar);
let pivotTableObj: PivotView = new PivotView({
      dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
    },
    toolbar:[{template:'#enablertl'},{template:'#disablertl'}],
    showToolbar:true,
    height: 350,
});
pivotTableObj.appendTo('#PivotTable');

let btnEnableRtl: Button = new Button({ content: 'Enable Rtl',cssClass: `e-primary` });
btnEnableRtl.appendTo('#btnenablertl');
let btnDisableRtl: Button = new Button({ content: 'Disable Rtl',cssClass: `e-primary` });
btnDisableRtl.appendTo('#btndisablertl');
document.getElementById('btnenablertl').onclick = function () {
    pivotTableObj.enableRtl=true;
};
document.getElementById('btndisablertl').onclick = function () {
    pivotTableObj.enableRtl=false;
};



