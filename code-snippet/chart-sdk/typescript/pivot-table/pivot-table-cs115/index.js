var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: nodata,
        expandAll: true,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        columns: [{ name: 'Date', showNoDataItems: true}],
        values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
        filters: []
    },
     height: 350
});
pivotTableObj.appendTo('#PivotTable');

