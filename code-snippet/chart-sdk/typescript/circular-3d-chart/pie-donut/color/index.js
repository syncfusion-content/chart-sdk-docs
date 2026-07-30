var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 3, fill: '#498fff', text:'January' }, 
                { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
                { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' }, 
                { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }
            ],
            xName: 'x',
            yName: 'y',
            pointColorMapping: 'fill',
            dataLabel: {
                visible: true,
                name: 'text'
            }
        }
    ],
    tilt: -45,
    legendSettings: { visible: false }
}, '#element');

