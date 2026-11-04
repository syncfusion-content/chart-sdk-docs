var data = [
  { month: 'Jan', revenue: 42000, target: 40000, orders: 720 },
  { month: 'Feb', revenue: 47000, target: 43000, orders: 790 },
  { month: 'Mar', revenue: 53000, target: 47000, orders: 860 },
  { month: 'Apr', revenue: 58000, target: 52000, orders: 940 },
  { month: 'May', revenue: 67000, target: 58000, orders: 1080 },
  { month: 'Jun', revenue: 72000, target: 65000, orders: 1160 },
  { month: 'Jul', revenue: 81000, target: 71000, orders: 1290 },
  { month: 'Aug', revenue: 86000, target: 78000, orders: 1370 },
  { month: 'Sep', revenue: 92000, target: 84000, orders: 1490 },
  { month: 'Oct', revenue: 101000, target: 91000, orders: 1620 },
  { month: 'Nov', revenue: 112000, target: 98000, orders: 1780 },
  { month: 'Dec', revenue: 126000, target: 108000, orders: 1960 }
];
var chart = new ej.charts.Chart({
    title: 'Revenue and Orders Performance',
    enableWebMcp: true,
    webMcpSettings: { name: 'allToolsChart' },
    enableExport: true,
    beforeWebMcp: (args) => {
        args.showConfirmationDialog = false;
    },
    dataSource: data,
    primaryXAxis: {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 }
    },
    primaryYAxis: {
        title: 'Revenue (USD)',
        labelFormat: '${value}',
        minimum: 0,
        maximum: 140000,
        interval: 20000
    },
    axes: [{
        name: 'ordersAxis',
        opposedPosition: true,
        minimum: 0,
        maximum: 2400,
        interval: 400,
        title: 'Orders'
    }],
    tooltip: {
        enable: true,
        shared: true
    },
    crosshair: {
        enable: true,
        lineType: 'Vertical'
    },
    zoomSettings: {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        mode: 'X'
    },
    legendSettings: {
        visible: true,
        position: 'Bottom'
    },
    selectionMode: 'Point',
    series: [
        { type: 'SplineArea', name: 'Revenue', xName: 'month', yName: 'revenue', fill: '#4439b868', opacity: 0.3 },
        { type: 'Column', name: 'Orders', xName: 'month', yName: 'orders', yAxisName: 'ordersAxis', fill: '#11B5A4' },
        { type: 'Spline', name: 'Target', xName: 'month', yName: 'target', fill: '#159FE0', dashArray: '7 5' }
    ]
}, '#element');

