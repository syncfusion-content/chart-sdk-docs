var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 13 },
                { x: 'Feb', y: 13 },
                { x: 'Mar', y: 7 },
                { x: 'Apr', y: 13 }
            ],
            xName: 'x',
            yName: 'y',
            dataLabel: {
                visible: true,
                format: 'n2'
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    }
}, '#element');

