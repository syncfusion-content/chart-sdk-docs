
import {
    PivotView,
    IDataSet,
    GroupingBar,
    FieldList,
} from '@syncfusion/ej2-pivotview';
import { Browser, enableRipple } from '@syncfusion/ej2-base';
import { pivotData } from './datasource.ts';
enableRipple(false);

PivotView.Inject(GroupingBar, FieldList);

let pivotObj: PivotView = new PivotView({
    dataSourceSettings: {
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        rows: [
            { name: 'Product_Categories', caption: 'Product Categories' },
            { name: 'Products' },
            { name: 'Order_Source', caption: 'Order Source' },
        ],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        drilledMembers: [
            { name: 'Product_Categories', items: ['Accessories', 'Bikes'] },
            { name: 'Products', delimiter: '##', items: ['Accessories##Helmets'] },
        ],
        filterSettings: [
            {
                name: 'Products',
                type: 'Exclude',
                items: ['Cleaners', 'Fenders'],
            },
        ],
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
        ],
        filters: [],
    },
    width: '100%',
    height: 450,
    showFieldList: true,
    gridSettings: {
        columnWidth: Browser.isDevice ? 100 : 120,
        layout: 'Tabular',
    },
});
pivotObj.appendTo('#PivotTable');


