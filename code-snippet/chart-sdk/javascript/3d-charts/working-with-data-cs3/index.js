var query = new ej.data.Query();

var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders',
    adaptor: new ej.data.ODataAdaptor()
});


var chart3D = new ej.charts.Chart3D({
    primaryXAxis: {
        valueType: 'Category',
        labelRotation: -45,
        labelPlacement: 'BetweenTicks'
    },
   series:[{
        dataSource: dataManager,
        type: 'Column',
        xName: 'CustomerID', yName: 'Freight', query: query,
    }],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100,
}, '#element');

