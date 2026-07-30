

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
      dataSource: pivotData as IDataSet[],
      expandAll: false,
      enableSorting: true,
      drilledMembers: [{ name: 'Country', items: ['France'] }],
      columns: [
          { name: 'Year', caption: 'Production Year' },
          { name: 'Quarter' },
      ],
      values: [
          { name: 'Sold', caption: 'Units Sold' },
          { name: 'Amount', caption: 'Sold Amount' },
      ],
      rows: [{ name: 'Country' }, { name: 'Products' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      filters: [],
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ content: 'Print', cssClass: `e-primary`, isPrimary: true });
exportBtn.appendTo('#print');

(document as any).getElementById('print').onclick = function () {
    // Method used to print the pivot table.
    pivotTableObj.grid.print();
};



