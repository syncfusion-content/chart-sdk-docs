var orderData = [
    { OrderID: 10248, CustomerName: 'Paul Henriot', OrderDate: new Date(2026, 0, 3), Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Karin Josephs', OrderDate: new Date(2026, 0, 5), Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Mario Pontes', OrderDate: new Date(2026, 0, 8), Freight: 65.83 },
    { OrderID: 10251, CustomerName: 'Mary Saveley', OrderDate: new Date(2026, 0, 12), Freight: 41.34 },
    { OrderID: 10252, CustomerName: 'Paul Henriot', OrderDate: new Date(2026, 0, 15), Freight: 51.30 },
    { OrderID: 10253, CustomerName: 'Carlos Hernandez', OrderDate: new Date(2026, 0, 18), Freight: 58.17 },
    { OrderID: 10254, CustomerName: 'Yang Wang', OrderDate: new Date(2026, 0, 22), Freight: 22.98 },
    { OrderID: 10255, CustomerName: 'Karin Josephs', OrderDate: new Date(2026, 0, 25), Freight: 148.33 },
    { OrderID: 10256, CustomerName: 'Hari Kumar', OrderDate: new Date(2026, 0, 28), Freight: 13.97 },
    { OrderID: 10257, CustomerName: 'Mario Pontes', OrderDate: new Date(2026, 1, 2), Freight: 81.91 },
    { OrderID: 10258, CustomerName: 'Mary Saveley', OrderDate: new Date(2026, 1, 5), Freight: 140.51 },
    { OrderID: 10259, CustomerName: 'Carlos Hernandez', OrderDate: new Date(2026, 1, 9), Freight: 3.25 }
];

var chart = new ej.charts.AccumulationChart({
    series: [{
        type: 'Pie',
        dataSource: [],
        xName: 'CustomerName',
        yName: 'Freight',
        name: 'Freight by customer',
        dataLabel: {
            visible: true,
            name: 'Label',
            position: 'Outside'
        },
        animation: {
            enable: false
        }
    }],
    legendSettings: {
        visible: true,
        position: 'Bottom'
    },
    tooltip: {
        enable: true,
        format: '${point.x}: ${point.y}'
    },
    title: 'Freight for the Current Grid View'
}, '#Chart');

var grid;

function aggregateFreight(records) {
    var totals = {};
    var result = [];
    var i;

    for (i = 0; i < records.length; i++) {
        var customer = records[i].CustomerName;
        var freight = Number(records[i].Freight);

        if (!customer || !isFinite(freight)) {
            continue;
        }

        totals[customer] = (totals[customer] || 0) + freight;
    }

    Object.keys(totals).forEach(function (customer) {
        result.push({
            CustomerName: customer,
            Freight: Number(totals[customer].toFixed(2)),
            Label: customer + ': $' + totals[customer].toFixed(2)
        });
    });

    return result;
}

function updatePieFromGrid() {
    var currentRecords = grid.getCurrentViewRecords();
    var pieData = aggregateFreight(currentRecords);

    chart.series[0].dataSource = pieData;
    chart.refresh();

    document.getElementById('recordStatus').textContent = pieData.length
        ? pieData.length + ' customer categories displayed in the Pie Chart.'
        : 'No Grid records are available for the Pie Chart.';
}

grid = new ej.grids.Grid({
    dataSource: orderData,
    allowPaging: true,
    allowFiltering: true,
    allowSorting: true,
    filterSettings: {
        type: 'Menu'
    },
    pageSettings: {
        pageSize: 6
    },
    columns: [{
        field: 'OrderID',
        headerText: 'Order ID',
        width: 110,
        textAlign: 'Right',
        isPrimaryKey: true
    }, {
        field: 'CustomerName',
        headerText: 'Customer Name',
        width: 170
    }, {
        field: 'OrderDate',
        headerText: 'Order Date',
        width: 130,
        type: 'date',
        format: 'yMd',
        textAlign: 'Right'
    }, {
        field: 'Freight',
        headerText: 'Freight',
        width: 110,
        type: 'number',
        format: 'C2',
        textAlign: 'Right'
    }],
    dataBound: function () {
        updatePieFromGrid();
    },
    actionComplete: function (args) {
        var chartActions = [
            'paging',
            'filtering',
            'sorting',
            'searching',
            'refresh'
        ];

        if (chartActions.indexOf(args.requestType) !== -1) {
            updatePieFromGrid();
        }
    }
});

grid.appendTo('#Grid');