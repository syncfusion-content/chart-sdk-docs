var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Products' }],
        rows: [{ name: 'Country' }, { name: 'Year' }, { name: 'Quarter' },],
        formatSettings: [{ name: 'Amount', format: 'C' }],
        values: [{ name: 'Amount' }, { name: 'Sold' }],
        filters: []
    },
    height: 350,
    displayOption: { view: 'Chart' },
    chartSettings: { chartSeries: { type: 'Pie' } }
});
pivotTableObj.appendTo('#PivotTable');


