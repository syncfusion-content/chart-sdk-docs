var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: data(1000),
        enableSorting: false,
        expandAll: true,
        formatSettings: [{ name: 'Price', format: 'C0' }],
        rows: [{ name: 'ProductID' }],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }]
    },
    width: '100%',
    height: 350,
    enableVirtualization: true,
    virtualScrollSettings: {
        allowSinglePage: true
    }
});
pivotTableObj.appendTo('#PivotTable');