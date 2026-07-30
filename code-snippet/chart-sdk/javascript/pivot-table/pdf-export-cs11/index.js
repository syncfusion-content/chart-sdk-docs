var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
     height: 320,
    allowPdfExport: true
});
pivotTableObj.appendTo('#PivotTable');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function () {
    var pdfExportProperties = {
          theme: { 
                header: {font:  new ej.pdfexport.PdfTrueTypeFont(window.base64AlgeriaFont, 11) }, 
                caption: { font: new ej.pdfexport.PdfTrueTypeFont(window.base64AlgeriaFont, 9) }, 
                record: { font: new ej.pdfexport.PdfTrueTypeFont(window.base64AlgeriaFont, 10) } 
            } 
    };
    pivotTableObj.pdfExport(pdfExportProperties);
};

