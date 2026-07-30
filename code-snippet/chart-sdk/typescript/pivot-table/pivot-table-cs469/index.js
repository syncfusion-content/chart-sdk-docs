var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        sortSettings: [{ name: 'Country', order: 'Ascending', membersOrder: ['United Kingdom','France'] }, {name: 'Year', order: 'Descending', membersOrder: ['FY 2015','FY 2017']}],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
    showGroupingBar: true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

