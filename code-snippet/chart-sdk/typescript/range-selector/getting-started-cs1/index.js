var range = new ej.charts.RangeNavigator({
    valueType: 'DateTime',
    value: [new Date('2017-09-01'), new Date('2018-02-01')],
    tooltip: { enable: true },
    labelFormat: 'MMM-yy',
    navigatorStyleSettings: {
        unselectedRegionColor: 'skyblue',
        selectedRegionColor: 'pink'
    },
    series: [{
        dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
    }],
});
range.appendTo('#element');

