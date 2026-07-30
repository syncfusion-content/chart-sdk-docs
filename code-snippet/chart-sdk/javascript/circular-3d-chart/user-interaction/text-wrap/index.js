var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Net-tution', y: 21 },
                { x: 'Private Gifts', y: 8 },
                { x: 'All Other', y: 9 },
                { x: 'Local Revenue', y: 4 },
                { x: 'State Revenue', y: 21 },
                { x: 'Federal Revenue', y: 16 },
                { x: 'Self-supporting Operations', y: 21 }
            ],
            xName: 'x',
            yName: 'y',
            innerRadius: '40%'
        }
    ],
    tilt: -45,
    legendSettings: { 
        visible: true, 
        position: 'Right', 
        textWrap: 'Wrap',
        maximumLabelWidth: 60 
    }
}, '#element');

