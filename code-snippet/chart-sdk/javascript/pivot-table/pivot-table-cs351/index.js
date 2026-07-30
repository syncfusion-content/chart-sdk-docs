var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivot_flatdata,
        expandAll: true,
        rows: [{ name: 'Country'}],
        columns: [{ name: 'Date' }, { name: 'Product' }],
        values: [{ name: 'Quantity', caption: 'Units Sold' },{ name: 'Amount', caption: 'Sold Amount' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        showColumnSubTotals:false
    },
     height: 350,
     editSettings: {  allowEditing: true, allowInlineEditing:true }
});
pivotTableObj.appendTo('#PivotTable');

