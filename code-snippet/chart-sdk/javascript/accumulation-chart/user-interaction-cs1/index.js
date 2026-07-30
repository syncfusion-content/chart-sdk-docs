var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [   { x: 'Chrome', y: 61.3, text: 'Chrome: 61.3%' },
            { x: 'Safari', y: 24.6, text: 'Safari: 24.6%' },
            { x: 'Edge', y: 5.0, text: 'Edge: 5.0%' },
            { x: 'Samsung Internet', y: 2.7, text:  'Samsung Internet: 2.7%' },
            { x: 'Firefox', y: 2.6, text: 'Firefox: 2.6%' },
            { x: 'Others', y: 3.6, text:  'Others: 3.6%' }],
            innerRadius: '65%',
            xName: 'x',
            yName: 'y'
        }
    ],
    centerLabel:{
        text : 'Mobile<br>Browsers<br>Statistics'
    }
}, '#element');

