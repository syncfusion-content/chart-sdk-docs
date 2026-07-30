var data = new ej.data.DataManager({
    url: 'https://bi.syncfusion.com/northwindservice/api/orders',
    adaptor: new ej.data.WebApiAdaptor,
    crossDomain: true
});

var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: data,
        expandAll: true,
        filters: [],
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
    },
    gridSettings: {
        columnWidth: 140
    },
    height: 350,
    spinnerTemplate: '<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>'
});
pivotTableObj.appendTo('#PivotTable');

