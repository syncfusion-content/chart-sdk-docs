// Creating separate series data with same x values but different y values
var totalSalesData = [
    { x: 'Electronics', y: 45000, text: '45K' },
    { x: 'Fashion', y: 32000, text: '32K' },
    { x: 'Home & Garden', y: 18000, text: '18K' },
    { x: 'Sports', y: 15000, text: '15K' },
    { x: 'Books', y: 8000, text: '8K' }
];

// Same x values as totalSalesData but different y values (profit)
var totalProfitData = [
    { x: 'Electronics', y: 18000, text: '18K', profit: '40%' },
    { x: 'Fashion', y: 12800, text: '12.8K', profit: '40%' },
    { x: 'Home & Garden', y: 6300, text: '6.3K', profit: '35%' },
    { x: 'Sports', y: 4500, text: '4.5K', profit: '30%' },
    { x: 'Books', y: 2400, text: '2.4K', profit: '30%' }
];

var piechart = new ej.charts.AccumulationChart({
    title: 'Product Sales vs Profit Analysis',
    subtitle: { text: 'Comparing total sales revenue with profit margins by product category' },
    series: [{
        name: 'Total Sales',
        dataSource: totalSalesData,
        xName: 'x',
        yName: 'y',
        innerRadius: '60%',
        radius: '90%',
        dataLabel: { 
            name: 'text', 
            visible: true, 
            position: 'Outside',
            connectorStyle: { type: 'Curve', color: 'black', width: 2, dashArray: '2,1', length: '5' }
        },
        tooltipMappingName: 'x'
    },
    {
        name: 'Total Profit',
        dataSource: totalProfitData,
        xName: 'x',
        yName: 'y',
        innerRadius: '50%',
        radius: '50%',
        dataLabel: { 
            name: 'text', 
            visible: true, 
            position: 'Inside',
            connectorStyle: { type: 'Curve', color: 'black', width: 2, dashArray: '2,1', length: '5' }
        },
        tooltipMappingName: 'x'
    }],
    tooltip: {
        enable: true,
        format: '<b>${point.x}</b><br/>Value: <b>$${point.y}</b><br/>Percentage: <b>${point.percentage}%</b>'
    },
    legendSettings: {
        mappingKey: 'x'
    },
    enableBorderOnMouseMove: false,
    border: { color: '#333', width: 2 }
}, '#element');

