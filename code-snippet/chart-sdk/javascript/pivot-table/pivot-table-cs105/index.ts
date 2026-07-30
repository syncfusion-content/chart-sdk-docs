

import { PivotView } from '@syncfusion/ej2-pivotview';

let pivotGridObj: PivotView = new PivotView({
    dataSourceSettings: {
        url: 'https://cdn.syncfusion.com/data/sales-analysis.json',
        expandAll: false,
        rows: [
            { name: 'EnerType', caption: 'Energy Type' }
        ],
        columns: [
            { name: 'EneSource', caption: 'Energy Source' }
        ],
        values: [
            { name: 'PowUnits', caption: 'Units (GWh)' },
            { name: 'ProCost', caption: 'Cost (MM)' }
        ],
        filters: []
    },
});
pivotGridObj.appendTo('#PivotTable');



