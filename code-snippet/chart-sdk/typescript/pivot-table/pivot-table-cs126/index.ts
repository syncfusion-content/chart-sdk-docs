

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: true,
        drilledMembers: [{ name: 'Quarter', delimiter:'~~',items: ['FY 2015~~Q1'] }, { name: 'Year', items: ['FY 2015','FY 2016'] }],
        rows: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        columns: [{ name: 'Country' }],
        filters: [],
    },
    drill: (args: DrillArgs) => {
    {
        //args.drillInfo -> get current drilled information
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



