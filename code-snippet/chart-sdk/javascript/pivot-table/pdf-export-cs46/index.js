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
    allowPdfExport: true,
    gridSettings: {
        pdfQueryCellInfo: function (args) {
            if (args.data && args.data.actualText === 'Sold') {
                if ((args).value < 700) {
                    args.style = {
                        backgroundColor: '#df3800',
                        fontFamily: 'Courier',
                        textPenColor: '#FFFFFF'
                    };
                } else {
                    args.style = {
                        backgroundColor: '#00A45A',
                        fontFamily: 'TimesRoman',
                        textPenColor: '#FFFFFF'
                    };
                }
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

