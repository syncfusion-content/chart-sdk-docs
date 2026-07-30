var pivotTableObj = new ej.pivotview.PivotView({
     dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year', showRemoveIcon: false}, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold', showRemoveIcon: false}, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products', showRemoveIcon: false}],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    showGroupingBar: true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');


