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
    height: 350,
    displayOption: { view: 'Chart' },
    chartSettings: {
        title: 'Sales Analysis', value: 'Amount', chartSeries: { type: 'Column' }, 
        enableMultipleAxis: true, showPointColorByMembers: true, multipleAxisMode: 'Stacked',
        primaryYAxis: {border: {width: '0'}}
    },
});
pivotTableObj.appendTo('#PivotTable');

