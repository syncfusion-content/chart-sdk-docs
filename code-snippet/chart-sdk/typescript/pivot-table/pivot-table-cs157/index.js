var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        allowLabelFilter: true,
        allowValueFilter: true,
        enableSorting: true,
        columns: [{ name: 'Date', caption: 'Date' }, { name: 'Product' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'State' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity', caption: 'Quantity' }]
    },
    height: 350,
    showGroupingBar: true
});
pivotTableObj.appendTo('#PivotTable');

