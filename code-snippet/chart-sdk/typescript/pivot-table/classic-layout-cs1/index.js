var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
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
        columnWidth: ej.base.Browser.isDevice ? 100 : 120,
        layout: 'Tabular',
    },
});
pivotTableObj.appendTo('#PivotTable');

