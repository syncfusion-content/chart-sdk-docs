var data = [];
var startDate = new Date(2025, 0, 1);
var i;

for (i = 0; i < 60; i++) {
    data.push({
        date: new Date(startDate.getTime() + (i * 24 * 60 * 60 * 1000)),
        sales: 40 + (Math.sin(i / 5) * 12) + (i * 0.25),
        orders: 25 + (Math.cos(i / 4) * 8) + (i * 0.15)
    });
}

var isSynchronizing = false;
var salesChart;
var ordersChart;

function synchronizeXAxis(sourceChart, targetChart) {
    if (isSynchronizing || !sourceChart || !targetChart) {
        return;
    }

    var sourceAxis = sourceChart.primaryXAxis;
    var targetAxis = targetChart.primaryXAxis;

    if (targetAxis.zoomFactor === sourceAxis.zoomFactor &&
        targetAxis.zoomPosition === sourceAxis.zoomPosition) {
        return;
    }

    isSynchronizing = true;
    targetAxis.zoomFactor = sourceAxis.zoomFactor;
    targetAxis.zoomPosition = sourceAxis.zoomPosition;
    targetChart.refresh();
    isSynchronizing = false;
}

function createZoomSettings() {
    return {
        mode: 'X',
        enableSelectionZooming: true,
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableScrollbar: true
    };
}

function createXAxis() {
    return {
        valueType: 'DateTime',
        labelFormat: 'MMM d',
        intervalType: 'Days',
        edgeLabelPlacement: 'Shift',
        zoomFactor: 0.35,
        zoomPosition: 0
    };
}

salesChart = new ej.charts.Chart({
    primaryXAxis: createXAxis(),
    primaryYAxis: {
        title: 'Sales'
    },
    series: [{
        type: 'Line',
        dataSource: data,
        xName: 'date',
        yName: 'sales',
        name: 'Sales',
        width: 2,
        animation: {
            enable: false
        }
    }],
    zoomSettings: createZoomSettings(),
    chartMouseMove: function () {
        synchronizeXAxis(salesChart, ordersChart);
    },
    chartMouseUp: function () {
        synchronizeXAxis(salesChart, ordersChart);
    },
    title: 'Daily Sales',
    height: '320px',
    width: '100%'
}, '#salesChart');

ordersChart = new ej.charts.Chart({
    primaryXAxis: createXAxis(),
    primaryYAxis: {
        title: 'Orders'
    },
    series: [{
        type: 'Line',
        dataSource: data,
        xName: 'date',
        yName: 'orders',
        name: 'Orders',
        width: 2,
        animation: {
            enable: false
        }
    }],
    zoomSettings: createZoomSettings(),
    chartMouseMove: function () {
        synchronizeXAxis(ordersChart, salesChart);
    },
    chartMouseUp: function () {
        synchronizeXAxis(ordersChart, salesChart);
    },
    title: 'Daily Orders',
    height: '320px',
    width: '100%'
}, '#ordersChart');