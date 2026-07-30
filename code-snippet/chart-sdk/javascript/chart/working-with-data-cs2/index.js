var dataManager = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders'
});
var query = new ej.data.Query().take(5).where('Estimate', 'lessThan', 3, false);
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis:
    {
        title: 'Freight rate in U.S. dollars'
    },
    series: [
        {
            type: 'Column',
            dataSource: dataManager,
            xName: 'CustomerID', yName: 'Freight', query: query
        }
    ],
    title: 'Container freight rate'
}, '#element');

