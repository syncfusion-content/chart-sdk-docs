var range = new ej.charts.RangeNavigator({
    valueType: 'DateTime',
    value: [new Date(2017, 8, 1), new Date(2018, 1, 1)],
    tooltip: { enable: true },
    series: [
        {
            dataSource: bitCoinData, xName: 'x', yName: 'y', type: 'Area',
            width: 2, animation: { enable: false }
        }
    ],
}, 'element');
document.getElementById('export').onclick = function () {
    range.export('PNG', 'result', null, [range]);
};
