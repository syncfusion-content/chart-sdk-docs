var chartData = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
var chart3D = new ej.charts.Chart3D({
    tooltip: { 
        enable: true,
        location: {  x: 120, y: 20 }
    },
        primaryXAxis: {
            valueType: 'Category',
            labelRotation: -45,
            labelPlacement: 'BetweenTicks'
        },
       series:[{
            dataSource: chartData,
            xName: 'month',
            yName: 'sales',
            type: 'Column'
        }],
        wallColor: 'transparent',
        enableRotation: true,
        rotation: 7,
        tilt: 10,
        depth: 100,

}, '#element');

