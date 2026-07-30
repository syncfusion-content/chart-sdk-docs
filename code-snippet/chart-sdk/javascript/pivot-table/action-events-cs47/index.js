var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    showGroupingBar: true,
    actionComplete: function (args) {
        if (args.actionName == 'Field sorted' || args.actionName == 'Field filtered') {
            // Triggers when the grouping bar UI actions such as sorting and filtering are completed.
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');


