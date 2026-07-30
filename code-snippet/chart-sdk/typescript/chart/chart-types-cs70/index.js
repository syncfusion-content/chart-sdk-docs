var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
            { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
            { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }],
            radius: '100%',
            xName: 'x',
            yName: 'y'
        }
    ],
    highlightColor: 'red',
	tooltip: {
        enable: true,
        format: '${series.name} ${point.x} : ${point.y}',
        //fill for tooltip
        fill: '#7bb4eb',
        //border for tooltip
        border: {
            width: 2,
            color: 'grey'
        }
    }
}, '#element');

