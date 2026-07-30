var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [
                { x: 'Renewed', y: 18.20, text: 'Renewed 18.20%' }, { x: 'Subscribe', y: 27.3, text: 'Subscribe 27.3%' },
                { x: 'Support', y: 55.9, text: 'Support 55.9%' },{ x: 'Downloaded', y: 76.8, text: 'Downloaded 76.8%' },
                { x: 'Visited', y: 100, text: 'Visited 100%' }
            ],
            type: 'Funnel',
            gapRatio: 0.08,
            xName: 'x',
            yName: 'y'
        }
    ],
    pointRender: (args) => {
        if ((args.point.x).indexOf('Downloaded') > -1) {
            args.fill = '#f4bc42';
        }
        else {
            args.fill = '#597cf9';
        }
    },
}, '#element');

