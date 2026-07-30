var data = new ej.data.DataManager({
    url: 'https://bi.syncfusion.com/northwindservice/api/orders',
    adaptor: new ej.data.WebApiAdaptor,
    crossDomain: true
});

var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: [],
        expandAll: true,
        filters: [],
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
    },
    height: 350,
    width: '100%',
    gridSettings: { columnWidth: 120 }
});
pivotTableObj.appendTo('#PivotTable');

data.executeQuery(new ej.data.Query().take(8)).then(function (e) {
    pivotTableObj.dataSourceSettings.dataSource = e.result;
});

