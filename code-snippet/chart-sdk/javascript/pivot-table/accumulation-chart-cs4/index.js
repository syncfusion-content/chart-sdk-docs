var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Products' }],
        rows: [{ name: 'Country' }, { name: 'Quarter' }],
        formatSettings: [{ name: 'Amount', format: 'C' }],
        values: [{ name: 'Amount' }, { name: 'Sold' }],
        filters: []
    },
    height: 350,
    displayOption: { view: 'Chart' },
    chartSettings: {
        enableSmartLabels: false,
        chartSeries: { dataLabel: {visible: true, position: 'Inside' }, type: 'Pyramid' }
    }
});
pivotTableObj.appendTo('#PivotTable');


