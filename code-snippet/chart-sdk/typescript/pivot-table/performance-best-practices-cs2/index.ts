import {
    PivotView,
    IDataSet,
    GroupingBar,
    Grouping,
} from '@syncfusion/ej2-pivotview';
import { gData } from './datasource.ts';

PivotView.Inject(GroupingBar, Grouping);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: gData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Product_ID', caption: 'Product ID' }],
        rows: [
            { name: 'Date_Year', caption: 'Year' },
            { name: 'Date_Month', caption: 'Month' },
        ],
        values: [
            { name: 'Sold', caption: 'Unit Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
        ],
        formatSettings: [
            { name: 'Amount', format: 'C' },
            { name: 'Date_Year', type: 'date_year', format: 'yyyy' },
            { name: 'Date_Month', type: 'date_month', format: 'MMM' },
        ],
        filters: [],
    },
    showGroupingBar: true,
    allowGrouping: true,
    height: 350,
});
pivotTableObj.appendTo('#PivotTable');
