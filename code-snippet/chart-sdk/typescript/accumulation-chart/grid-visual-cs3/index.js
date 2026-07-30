var chart = new ej.charts.Chart();
var filtertype = [
    { id: 'Menu', type: 'Menu' },
    { id: 'CheckBox', type: 'CheckBox' },
    { id: 'Excel', type: 'Excel' }
];

var grid = new ej.grids.Grid(
    {
        dataSource: orderData,
        allowPaging: true,
        allowFiltering: true,
        filterSettings: { type: 'Menu' },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            {
                field: 'OrderDate', headerText: 'Order Date', width: 130,
                format: { type: 'dateTime', format: 'M/d/y hh:mm a' }, textAlign: 'Right'
            },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
        ],
        pageSettings: { pageCount: 5 },
        dataBound: function () {
            chart = new ej.charts.AccumulationChart({
                series: [
                    {
                        dataSource: grid.getCurrentViewRecords(),
                        type: 'Pie',
                        xName: 'CustomerName',
                        yName: 'Freight', dataLabel: { visible: true }
                    }
                ]
            }, '#Chart');
        },
        actionComplete: function (args) {
            if (args.requestType === 'paging') {
                chart.series[0].dataSource = grid.getCurrentViewRecords();
                chart.refresh();
            }
        }
    }, '#Grid');