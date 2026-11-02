var query = new ej.data.Query()
    .select(['CustomerID', 'Freight'])
    .take(10);

var data = new ej.data.DataManager({
    url: 'https://services.odata.org/V3/Northwind/Northwind.svc/Orders',
    adaptor: new ej.data.ODataAdaptor(),
    crossDomain: true
});

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Customer'
    },
    primaryYAxis: {
        title: 'Freight',
        minimum: 0
    },
    series: [{
        type: 'Column',
        dataSource: data,
        query: query,
        xName: 'CustomerID',
        yName: 'Freight',
        name: 'Freight'
    }],
    title: 'Northwind Order Freight'
}, '#element');