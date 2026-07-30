var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 13, text: 'Jan: 13' }, 
                { x: 'Feb', y: 13, text: 'Feb: 13' },
                { x: 'Mar', y: 17, text: 'Mar: 17' }, 
                { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }
            ],
            xName: 'x',
            yName: 'y',
            dataLabel: {
                visible: true,
                name: 'text',
                position: 'Outside'
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    },
    textRender: (args) => {
        if (args.text.indexOf('Mar') > -1) {
            args.color = 'red';
            args.border.width = 1;
        }
    }
}, '#element');

