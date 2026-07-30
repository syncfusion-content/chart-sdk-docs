var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        columns: [{ name: 'Date', caption: 'Date' }, { name: 'Product' }],
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        filters: [{ name: 'Quarter' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'State' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity', caption: 'Quantity' }]
    },
     height: 350,
    showFieldList: true,
    showGroupingBar:true
});
pivotTableObj.appendTo('#PivotTable');

