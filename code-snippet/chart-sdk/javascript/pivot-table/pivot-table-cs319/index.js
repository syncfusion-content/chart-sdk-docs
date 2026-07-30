var data = new ej.data.DataManager({ json: pivotData, adaptor: new ej.data.JsonAdaptor });
var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: data,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: [],
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

