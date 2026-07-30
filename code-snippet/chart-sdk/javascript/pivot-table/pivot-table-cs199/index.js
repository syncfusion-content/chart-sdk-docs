var remoteData = new ej.data.DataManager({
    url: 'https://bi.syncfusion.com/northwindservice/api/orders',
    adaptor: new ej.data.WebApiAdaptor(),
    crossDomain: true
});
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        type: 'JSON',
        dataSource: remoteData,
        expandAll: true,
        columns: [{
            name: 'ProductName',
            caption: 'Product Name'
        }],
        rows: [{
            name: 'ShipCountry',
            caption: 'Ship Country'
        }, {
            name: 'ShipCity',
            caption: 'Ship City'
        }],
        formatSettings: [{
            name: 'UnitPrice',
            format: 'C0'
        }],
        values: [{
            name: 'Quantity'
        }, {
            name: 'UnitPrice',
            caption: 'Unit Price'
        }],
        filters: []
    },
    width: '100%',
    height: 350,
    enablePaging: true,
    pageSettings: {
        rowPageSize: 10,
        columnPageSize: 5,
        currentColumnPage: 1,
        currentRowPage: 1
    },
    pagerSettings: {
        position: 'Top'
    },
    gridSettings: {
        columnWidth: 120
    },
});
pivotObj.appendTo("#PivotTable");

