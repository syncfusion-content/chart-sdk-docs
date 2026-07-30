var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
    height: 350,
        displayOption: { view: 'Both' },
        chartSettings: {
            value: 'Amount', chartSeries: { type: 'Column', animation: { enable: false } },
            tooltip: { template: '<span class="wrap">${aggregateType} of ${valueField}: ${value}</span>' }
        },
        toolbar: ['Grid', 'Chart'],
        showToolbar: true,
        tooltipTemplate: "#Template"
});
pivotTableObj.appendTo('#PivotTable');

