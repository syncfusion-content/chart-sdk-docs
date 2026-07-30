var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        values: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 320,
    allowExcelExport: true,
    enableVirtualization: true,
    exportComplete: function (args) {
        if (args.promise !== null)
            args.promise.then(function (e) {
                console.log(e.blobData);
        });
    }
});
pivotTableObj.appendTo('#PivotTable');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#excel');

document.getElementById('excel').onclick = function () {
    var excelExportProperties = {
        fileName: 'excelexport.xlsx',
    };
    pivotTableObj.excelExport(excelExportProperties, false, null, true);
};

