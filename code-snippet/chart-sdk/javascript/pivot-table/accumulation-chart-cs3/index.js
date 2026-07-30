var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['Germany'] }],
        enableSorting: true,
        columns: [{ name: 'Country' }, { name: 'Products' }],
        rows: [{ name: 'Year' }, { name: 'Quarter' }],
        formatSettings: [{ name: 'Amount', format: 'C' }],
        values: [{ name: 'Amount' }, { name: 'Sold' }],
        filters: []
    },
    height: 350,
    displayOption: { view: 'Chart' },
    chartSettings: { columnHeader: 'Germany-Road Bikes', columnDelimiter: '-', chartSeries: { type: 'Doughnut' } }
});
pivotTableObj.appendTo('#PivotTable');


