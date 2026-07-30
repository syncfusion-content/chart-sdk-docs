var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        drilledMembers: [{ name: 'Year', items: ['FY 2015'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }],
        rows: [{ name: 'Country' }, { name: 'Products' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    allowPdfExport: true,
    height: 320,
    gridSettings: {
        pdfQueryCellInfo: function (args) {
            if (args.cell && args.cell.row && args.cell.row.pdfGrid) {
                args.cell.row.pdfGrid.repeatHeader = false;
            }
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function () {
    pivotTableObj.pdfExport();
};


