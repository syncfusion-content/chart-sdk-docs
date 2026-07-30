var chart = new ej.charts.AccumulationChart({
    width: '500px',
    series: [{
        type: 'Funnel',
        dataSource: [{ x: 'Renewed', y: 18.20, text: 'Renewed 18.20%' },
        { x: 'Subscribe', y: 27.3, text: 'Subscribe 27.3%' },
        { x: 'Support', y: 55.9, text: 'Support 55.9%' },
        { x: 'Downloaded', y: 76.8, text: 'Downloaded 76.8%' },
        { x: 'Visited', y: 100, text: 'Visited 100%' }],
        xName: 'x', yName: 'y',
        dataLabel: { name: 'text', visible: true, position: 'Inside' },
        width: '60%', height: '90%'}
        ],
    title: 'Website visitor',
}, '#element');

