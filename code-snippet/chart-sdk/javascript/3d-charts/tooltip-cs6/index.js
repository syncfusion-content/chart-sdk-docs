var chartData = [
    { month: new Date(2024, 0, 1), sales: 35 },
    { month: new Date(2024, 1, 1), sales: 28 },
    { month: new Date(2024, 2, 1), sales: 34 },
    { month: new Date(2024, 3, 1), sales: 32 },
    { month: new Date(2024, 4, 1), sales: 40 },
    { month: new Date(2024, 5, 1), sales: 32 },
    { month: new Date(2024, 6, 1), sales: 35 },
    { month: new Date(2024, 7, 1), sales: 55 },
    { month: new Date(2024, 8, 1), sales: 38 },
    { month: new Date(2024, 9, 1), sales: 30 },
    { month: new Date(2024, 10, 1), sales: 25 },
    { month: new Date(2024, 11, 1), sales: 32 }
];

var chart3D = new ej.charts.Chart3D({
    tooltip: {
        enable: true,
        header: 'Sales',
        format: '<b>${series.name}</b><br>${point.x:MMM yyyy} : ${point.y:n2}'
    },
    primaryXAxis: {
        valueType: 'DateTime',
        labelRotation: -45,
        labelPlacement: 'BetweenTicks'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'month',
            yName: 'sales',
            type: 'Column',
            name: 'Sales'
        }
    ],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');