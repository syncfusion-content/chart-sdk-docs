var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    gridSettings: {
        columnRender: function (args) {
            // Specific column(s) can be hidden by checking their level name and setting its visible property accordingly.
            for (var i = 1; i < args.columns.length; i++) {
                if (args.stackedColumns[i].customAttributes &&
                    args.stackedColumns[i].customAttributes.cell.valueSort.levelName === 'FY 2016.Units Sold') {
                    args.stackedColumns[i].visible = false;
                }
            }
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');
