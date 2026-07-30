

import { PivotView } from '@syncfusion/ej2-pivotview';

let pivotObj: PivotView = new PivotView({
    dataSourceSettings: {
        url: 'https://bi.syncfusion.com/productservice/api/sales',
        type: 'CSV',
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Total Cost', format: 'C0' }, { name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
        drilledMembers: [{ name: 'Item Type', items: ['Baby Food'] }],
        rows: [
            { name: 'Region' },
            { name: 'Country' }
        ],
        columns: [
            { name: 'Item Type' },
            { name: 'Sales Channel' }
        ],
        values: [
            { name: 'Total Cost' },
            { name: 'Total Revenue' },
            { name: 'Total Profit' }
        ],
        filters: []
    },
    height: 300,
    width: '100%'
});
pivotObj.appendTo('#PivotTable');



