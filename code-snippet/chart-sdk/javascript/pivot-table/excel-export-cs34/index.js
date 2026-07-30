var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
    },
    width: '100%',
    height: 300,
    allowExcelExport: true,
    beforeExport: function (args) {
        for (var i = 0; i < args.dataCollections.length; i++) {
            var pivotValue = args.dataCollections[i];
            for (var j = 0; j < pivotValue.length; j++) {
                var row = pivotValue[j];
                if (row) {
                    pivotValue[j] = row.filter(function (item) {
                        return item !== null && (item.axis !== 'row');
                    });
                }
            }
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#excel');

document.getElementById('excel').onclick = function () {
    pivotTableObj.excelExport();
};