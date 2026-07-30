var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    showFieldList: true,
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog' },
    actionBegin: function (args) {
        if (args.actionName == 'Add new record' || args.actionName == 'Save edited records') {
            args.cancel = true;
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

