var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        columns: [{ name: 'Date', showNoDataItems: true }],
        values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
        filters: [],
        emptyCellsTextContent: '**'
    },
    allowPdfExport: true,
    height: 450,
    gridSettings: {
        queryCellInfo: function (args) {
            const colIndex = Number(args.cell.getAttribute('aria-colindex'));
            const currentCell = args.data[colIndex - 1];
            if (currentCell.formattedText === '**' &&
                currentCell.actualText === 'Quantity' &&
                ['Canada.New Mexico', 'United States.British Columbia'].includes(currentCell.rowHeaders)) {
                args.rowSpan = 2;
                args.colSpan = 2;
            }
        },
        pdfQueryCellInfo: function (args) {
            if (args.value === '**' &&
                args.data.actualText === 'Quantity' &&
                ['Canada.New Mexico', 'United States.British Columbia'].includes(args.data.rowHeaders)) {
                args.cell.rowSpan = 2;
                args.cell.colSpan = 2;
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

