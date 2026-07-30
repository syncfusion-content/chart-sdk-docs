var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        drilledMembers: [{ name: 'Quarter', delimiter:'~~',items: ['FY 2015~~Q1'] }, { name: 'Year', items: ['FY 2015','FY 2016'] }],
        rows: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        columns: [{ name: 'Country' }],
        filters: [],
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

