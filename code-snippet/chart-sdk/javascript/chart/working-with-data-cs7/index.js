var query = new ej.data.Query();

var data = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
    adaptor: new ej.data.ODataV4Adaptor()
});


var chart = new ej.charts.Chart({
    //Initializing Primary X Axis 
    primaryXAxis: {
        valueType: 'Category',
    },
    //Initializing Chart Sample 
    series: [
        {
            type: 'Column',
            dataSource: data,
            xName: 'CustomerID', yName: 'Freight', query: query
        }
    ],
    title: 'Sprint Task Analysis'
}, '#element');

