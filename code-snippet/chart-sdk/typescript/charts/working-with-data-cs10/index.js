class SerialNoAdaptor extends ej.data.ODataV4Adaptor {
    processResponse() {
        var i= 0;
        // calling base class processResponse function
        var original = super.processResponse.apply(this, arguments);
        // adding serial number
        original.result.forEach(function(item){item['Sno'] = ++i});
        return { result: original.result, count: original.count };
    }
}

var query = new ej.data.Query();

var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders',
    adaptor: new SerialNoAdaptor()
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
            xName: 'CustomerID', yName: 'Sno', query: query
        }
    ],
    title: 'Sprint Task Analysis'
}, '#element');

