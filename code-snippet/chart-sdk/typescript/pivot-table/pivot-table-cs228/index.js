var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filterSettings: [{ name: 'Year', type: 'Exclude', items: ['FY 2015', 'FY 2017'] }],
        filters: []
    },
    height: 350,
    width: 800,
    gridSettings: {
        columnWidth: 120,
        allowAutoResizing: false
    }
});
pivotTableObj.appendTo('#PivotTable');

