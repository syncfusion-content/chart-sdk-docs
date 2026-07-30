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
    height: 300,
    allowExcelExport: true
});
pivotTableObj.appendTo('#PivotTable');

var pivotTableObj2 = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        rows: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
        columns: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
    height: 300,
    allowExcelExport: true
});
pivotTableObj2.appendTo('#PivotTable2');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#excel');

document.getElementById('excel').onclick = function () {
    let excelExportProperties = {
        multipleExport: { type: 'NewSheet' },
        pivotTableIds: ['PivotTable', 'PivotTable2']
    };
    pivotTableObj.excelExport(excelExportProperties, true);
};
