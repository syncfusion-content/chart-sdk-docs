var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: Group_Data,
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }],
        rows: [{ name: 'Date' }],
        columns: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        values: [{ name: 'Sold', caption: 'Unit Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
        filters: [{ name: 'Products' }, { name: 'Product_ID', caption: 'Product ID' }],
        groupSettings: [{ name: 'Date', type: 'Date', groupInterval: ['Years', 'Months'], startingAt: new Date(2015, 6, 1), endingAt: new Date(2017, 6, 31) }]
    },
    showGroupingBar: true,
    allowGrouping: true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

