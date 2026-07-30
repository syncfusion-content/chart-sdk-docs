var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [{ x: 'Jan', y: 13, text: 'Jan: 13' }, { x: 'Feb', y: 13, text: 'Feb: 13' },
            { x: 'Mar', y: 17, text: 'Mar: 17' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }],
            xName: 'x',
            yName: 'y',
            type: 'Pie'
        }
    ],
    legendSettings:{ visible: true, title: 'Months', position: 'Bottom' }
}, '#element');

