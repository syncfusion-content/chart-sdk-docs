var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        valueSortSettings: {
            columnHeaderText: "FY 2015##Unit Sold",
            headerDelimiter: '##',
            columnSortOrder: "Sorting.Descending",
            rowHeaderText: "France",
            rowSortOrder: "Sorting.Ascending"
        },
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: [],
    },
    height: 350,
    enableValueSorting: true
});
pivotTableObj.appendTo('#PivotTable');

