var chartData = [
    { country: 'USA', gold: 50, silver: 70 },
    { country: 'China', gold: 40, silver: 60 },
    { country: 'Japan', gold: 70, silver: 60 },
    { country: 'Australia', gold: 60, silver: 56 },
    { country: 'France', gold: 50, silver: 45 },
    { country: 'Germany', gold: 40, silver: 30 },
    { country: 'Italy', gold: 40, silver: 35 },
    { country: 'Sweden', gold: 30, silver: 25 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Country'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 80,
        interval: 20,
        title: 'Medals'
    },
    series: [{
        type: 'Line',
        dataSource: chartData,
        xName: 'country',
        yName: 'gold',
        name: 'Gold',
        width: 2,
        marker: {
            visible: true
        }
    }, {
        type: 'Line',
        dataSource: chartData,
        xName: 'country',
        yName: 'silver',
        name: 'Silver',
        width: 2,
        marker: {
            visible: true
        }
    }],
    legendSettings: {
        visible: true,
        toggleVisibility: false,
        position: 'Bottom'
    },
    legendClick: function (args) {
        if (!args.series) {
            return;
        }

        args.cancel = true;
        args.series.visible = !args.series.visible;
        args.chart.refresh();

        document.getElementById('legendStatus').textContent =
            args.series.name + ' series is now ' +
            (args.series.visible ? 'visible.' : 'hidden.');
    },
    title: 'Olympic Medals',
    width: '100%',
    height: '380px'
}, '#element');