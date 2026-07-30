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
        chartSeries: {
            dataLabel: {visible: true, position: 'Outside', connectorStyle: { length: '50px', width: 2, dashArray: '5,3', color: '#f4429e' } },
            type: 'Funnel'
        }
    }
});
pivotTableObj.appendTo('#PivotTable');


