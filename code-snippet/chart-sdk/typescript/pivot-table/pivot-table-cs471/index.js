var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
    showGroupingBar: true,
    height: 350,
    onHeadersSort: function (args) {
        if (args.fieldName == 'Country') {
            args.members = ['United Kingdom', 'Germany'];
            args.IsOrderChanged = true;
        }
        if (args.fieldName == 'Year') {
            args.members = ['FY 2017', 'FY 2015'];
            args.IsOrderChanged = true;
        }
    },
});
pivotTableObj.appendTo('#PivotTable');

