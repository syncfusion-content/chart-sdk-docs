var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        enableSorting: true,
        sortSettings: [{ name: 'Country', order: 'Descending' }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
        height: 350,
        displayOption: { view: 'Both' },
        toolbar: ['Grid','Chart'],
        chartTypes:['Column', 'Bar', 'Line', 'Area'],
        showToolbar: true,
       
});
pivotTableObj.appendTo('#PivotTable');

