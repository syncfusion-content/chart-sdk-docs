var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 3, text:'January' }, 
                { x: 'Feb', y: 3.5, text: 'February' },
                { x: 'Mar', y: 7, text: 'March' }, 
                { x: 'Apr', y: 13.5, text: 'April' }
            ],
            xName: 'x',
            yName: 'y',
            dataLabel: {
                visible: true,
                name: 'text'
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    }
}, '#element');

