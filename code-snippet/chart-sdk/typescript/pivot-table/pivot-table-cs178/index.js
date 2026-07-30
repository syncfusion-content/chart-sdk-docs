var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 350,
    showGroupingBar: true,
    aggregateMenuOpen: function (args) {
        args.displayMenuCount = 4;
        if(args.fieldName === 'Amount') {
            args.aggregateTypes = ['Sum', 'Min', 'Max'];
        }
    },
});
pivotTableObj.appendTo('#PivotTable');

