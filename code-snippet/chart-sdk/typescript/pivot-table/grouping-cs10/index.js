var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: Group_Data,
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }, { name: 'Product_ID', format: 'N0' }],
        rows: [{ name: 'Date', caption: 'Date' }],
        columns: [{ name: 'Product_ID', caption: 'Product ID' }],
        values: [{ name: 'Sold', caption: 'Unit Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
        filters: []
    },
    showGroupingBar: true,
    allowGrouping: true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

