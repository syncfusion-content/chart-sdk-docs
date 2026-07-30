var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 13 }, 
                { x: 'Feb', y: 13 },
                { x: 'Mar', y: 17 }, 
                { x: 'Apr', y: 13.5 }
            ],
            xName: 'x',
            yName: 'y',
            dataLabel: {
                visible: true,
                position: 'Outside'
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    }
}, '#element');

