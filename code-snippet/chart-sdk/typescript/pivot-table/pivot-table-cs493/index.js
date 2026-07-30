var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        sortSettings: [{ name: 'Country', order: 'Descending' }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    }, 
    height: 350,
    actionBegin: function (args) {
        if (args.actionName == 'PDF export') {
            args.cancel = true;
            pivotTableObj.pdfExport({}, false, null, false, true);
        }
    },
    toolbar: ['Grid', 'Chart', 'Export', 'FieldList'],
    allowPdfExport: true,
    showToolbar: true,
    displayOption:{ view:'Both' },
    allowCalculatedField: true,
    showFieldList: true,
    gridSettings: { columnWidth: 140 }
});
pivotTableObj.appendTo('#PivotTable');
