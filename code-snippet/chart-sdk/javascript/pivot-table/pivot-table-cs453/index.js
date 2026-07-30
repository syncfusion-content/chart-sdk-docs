var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 350,
    width: 800,
    showGroupingBar: true,
    dataBound: function (args) {
        var columns = [];
        for (var i = 1; i < pivotTableObj.grid.columnModel.length; i++) {
            columns.push(pivotTableObj.grid.columnModel[i].field);
        }
        pivotTableObj.grid.autoFitColumns(columns);
    },
});
pivotTableObj.appendTo('#PivotTable');

