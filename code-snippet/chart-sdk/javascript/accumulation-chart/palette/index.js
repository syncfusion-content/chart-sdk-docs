var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
            { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
            { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }],
            radius: '100%',
            xName: 'x',
            yName: 'y',
            palettes: ['#0078D7', '#00B294', '#E671B8', '#FEB81D', '#108EE9', '#3D9970', '#E51400', '#6BA5D7', '#FFB900', '#F28F44']
        }
    ],
	tooltip:{enable: true}
}, '#element');

