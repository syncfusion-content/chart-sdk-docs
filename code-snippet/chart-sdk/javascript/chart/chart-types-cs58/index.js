var chart = new ej.charts.AccumulationChart({
    series: [{
        type: 'Funnel',
        dataSource: [{ x: 'Renewed', y: 18.20, text: 'Renewed 18.20%' },
        { x: 'Subscribe', y: 27.3, text: 'Subscribe 27.3%' },
        { x: 'Support', y: 55.9, text: 'Support 55.9%' },
        { x: 'Downloaded', y: 76.8, text: 'Downloaded 76.8%' },
        { x: 'Visited', y: 100, text: 'Visited 100%' }],
        xName: 'x', yName: 'y',
        //Width of the funnel will be 100% of the chart area
        width: '60%',
        //Height of the funnel will be 100% of the chart area
        height: '80%',
        dataLabel: { name: 'text', visible: true, position: 'Inside' },
        }],
    title: 'Website visitor',
}, '#element');

