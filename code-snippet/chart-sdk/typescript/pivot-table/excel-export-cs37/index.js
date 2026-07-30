var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
    },
    width: '100%',
    height: 300,
    allowExcelExport: true,
    gridSettings: {
        excelQueryCellInfo: function (args) {
            if (args.cell && args.cell.actualText === 'Sold') {
                if (args.value < 700) {
                    args.style = {
                        backColor: '#df3800',
                        fontName: 'Biome',
                        fontColor: '#FFFFFF',
                        borders: { color: '#8B1E00', lineStyle: 'thin' }
                    };
                }
                else {
                    args.style = {
                        backColor: '#00A45A',
                        fontName: 'Nirmala UI',
                        fontColor: '#FFFFFF',
                        borders: { color: '#00663A', lineStyle: 'thin' }
                    };
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