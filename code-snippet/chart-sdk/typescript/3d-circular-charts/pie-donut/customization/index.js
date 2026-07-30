var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 3 }, 
                { x: 'Feb', y: 3.5 },
                { x: 'Mar', y: 7 }, 
                { x: 'Apr', y: 13.5 }
            ],
            xName: 'x',
            yName: 'y'
        }
    ],
    tilt: -45,
    legendSettings: { visible: false },
    pointRender: (args) => {
        if ((args.point.x).indexOf('Apr') > -1) {
            args.fill = '#f4bc42';
        }
        else if ((args.point.x).indexOf('Mar') > -1) {
            args.fill = '#DE3D8A';
        }
        else if ((args.point.x).indexOf('Feb') > -1) {
            args.fill = '#F7523F';
        }
        else {
            args.fill = '#597cf9';
        }
    }
}, '#element');

