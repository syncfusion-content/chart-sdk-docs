var pivotGridObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        enableSorting: true,
        columns: [{ name: 'Year' }],
        values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
        ],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        expandAll: false,
        filters: []
    },
    height: 300,
    allowExcelExport: true,
    beforeExport: function (args) {
        var drilledMembers = pivotGridObj.dataSourceSettings.drilledMembers;
        pivotGridObj.setProperties({ dataSourceSettings: { expandAll: true, drilledMembers: [] } }, true);
        pivotGridObj.engineModule.generateGridData(pivotGridObj.dataSourceSettings, true);
        args.dataCollections = [pivotGridObj.engineModule.pivotValues];
        pivotGridObj.setProperties({ dataSourceSettings: { expandAll: false, drilledMembers: drilledMembers } }, true);
    }
});
pivotGridObj.appendTo('#PivotView');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#excel');

document.getElementById('excel').onclick = function () {
    pivotGridObj.excelExport();
};

