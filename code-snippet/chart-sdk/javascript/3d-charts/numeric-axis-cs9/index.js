var chartData = [
    { x: 10, y: 7000 }, { x: 20, y: 1000 }, { x: 30, y: 12000 }, { x: 40, y: 14000 }, { x: 50, y: 11000 }, { x: 60, y: 5000 },
    { x: 70, y: 7300 }, { x: 80, y: 9000 }, { x: 90, y: 12000 }, { x: 100, y: 14000 }, { x: 110, y: 11000 }, { x: 120, y: 5000 }
];

var chart3D = new ej.charts.Chart3D({
    useGroupingSeparator: true,
        series: [
            {
                type: 'Column', xName: 'x', yName: 'y', columnSpacing: 0.1,
                dataSource: chartData
            }
        ],
        wallColor: 'transparent',
        enableRotation: true,
        rotation: 7,
        tilt: 10,
        depth: 100
}, '#element');

