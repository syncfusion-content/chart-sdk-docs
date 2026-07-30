var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
    },    
    showGroupingBar: true,
    showFieldList: true,
    height: 350,
    load: function(args) {
        args.defaultFieldListOrder = 'Descending';
    }
});
pivotTableObj.appendTo('#PivotTable');

