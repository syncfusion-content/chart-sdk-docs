var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
            dataSource: alphanumeric_data,
            rows: [{ name: 'ProductID', dataType: 'number' }],
            columns: [{ name: 'Country' }],
            values: [{ name: 'Sold', caption:'Units Sold' }, { name: 'Amount', caption:'Sold Amount' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }]
    },
    showGroupingBar: true,
   height: 350
});
pivotTableObj.appendTo('#PivotTable');

