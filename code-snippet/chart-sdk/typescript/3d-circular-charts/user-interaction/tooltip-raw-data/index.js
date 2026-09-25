var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: new Date(2024, 0, 1), y: 13 },
                { x: new Date(2024, 1, 1), y: 13 },
                { x: new Date(2024, 2, 1), y: 17 },
                { x: new Date(2024, 3, 1), y: 13.5 }
            ],
            xName: 'x',
            yName: 'y'
        }
    ],
    tilt: -45,
    tooltip: {
        enable: true,
        format: '${point.x:MMM yyyy} : <b>${point.y:n2}%</b>'
    },
    legendSettings: {
        visible: false
    }
}, '#element');