var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: salesData,
        expandAll: false,
        rows: [{ name: 'Region', caption: 'Region' }],
        columns: [{ name: 'Product', caption: 'Product' }],
        values: [
            { name: 'Sales', caption: 'Q4 Sales' },
            { name: 'ProfitMargin', caption: 'Profit Margin' }
        ],
        formatSettings: [
            { name: 'Sales', format: 'C0' },
            { name: 'ProfitMargin', format: '0\'%\'' }
        ],
        filterSettings: [{ name: 'Product', items: ['Laptop'], type: 'Include' }]
    },
    width: '100%',
    height: 300,
    allowPdfExport: true,
    showFieldList: true
});
var pivotTableObj2 = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: salesData,
        expandAll: false,
        rows: [{ name: 'Region', caption: 'Region' }],
        columns: [{ name: 'Product', caption: 'Product' }],
        values: [
            { name: 'Units', caption: 'Units Sold' },
            { name: 'Sales', caption: 'Q4 Sales' }
        ],
        formatSettings: [
            { name: 'ProfitMargin', format: '0\'%\'' },
            { name: 'Sales', format: 'C0' }
        ],
        filterSettings: [{ name: 'Product', items: ['Smartphone'], type: 'Include' }]
    },
    width: '100%',
    height: 300,
    allowPdfExport: true,
    showFieldList: true
});
pivotTableObj.appendTo('#PivotTable1');
pivotTableObj2.appendTo('#PivotTable2');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function () {
    var pdfExportProperties = {
        multipleExport: { type: 'NewPage' },
        pivotTableIds: ['PivotTable1', 'PivotTable2']
    };
    pivotTableObj.pdfExport(pdfExportProperties, true);
};

