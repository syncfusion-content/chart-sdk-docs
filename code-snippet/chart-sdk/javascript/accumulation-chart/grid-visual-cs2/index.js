var chart = new ej.charts.Chart();
var data = new ej.data.DataManager(orderData).executeLocal(new ej.data.Query().take(100));
var grid = new ej.grids.Grid({

    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 10 },
    columns: [
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
    ],
    dataBound: function () {
        chart = new ej.charts.Chart({
            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: 'DateTime',
                intervalType: 'Days'
            },
            series: [
                {
                    type: 'Line',
                    dataSource: grid.getCurrentViewRecords(),
                    xName: 'OrderDate', width: 2, marker: {
                        visible: true
                    },
                    yName: 'Freight', name: 'Germany'
                },
            ],

        }, '#Chart');
    },
    actionComplete: function (args) {
        if (args.requestType === 'paging') {
            chart.series[0].dataSource = grid.getCurrentViewRecords();
            chart.refresh();
        }
    }
}, '#Grid');

