var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [
                { x: new Date(2024, 0, 1), y: 3 },
                { x: new Date(2024, 1, 1), y: 3.5 },
                { x: new Date(2024, 2, 1), y: 7 },
                { x: new Date(2024, 3, 1), y: 13.5 },
                { x: new Date(2024, 4, 1), y: 19 },
                { x: new Date(2024, 5, 1), y: 23.5 },
                { x: new Date(2024, 6, 1), y: 26 },
                { x: new Date(2024, 7, 1), y: 25 },
                { x: new Date(2024, 8, 1), y: 21 },
                { x: new Date(2024, 9, 1), y: 15 }
            ],
            radius: '100%',
            xName: 'x',
            yName: 'y'
        }
    ],
    tooltip: {
        enable: true,
        format: '${point.x:MMM yyyy} : <b>${point.y:n2}%</b>'
    }
}, '#element');