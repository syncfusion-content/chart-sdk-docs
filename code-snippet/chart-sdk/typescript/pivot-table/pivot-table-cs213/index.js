var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Products', type:'Count' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 550,
    displayOption: { view: 'Chart' },
    chartSettings: { enableMultipleAxis: true, 
    enableScrollOnMultiAxis:true, 
    chartSeries: { type: 'Column' } }
});
pivotTableObj.appendTo('#PivotTable');

