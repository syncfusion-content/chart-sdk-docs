var chart = new ej.charts.Chart(
        {
                primaryXAxis: {
                        valueType: 'DateTime',
                        edgeLabelPlacement: 'Shift'
                },
                series: [{
                        dataSource: datasrc, xName: 'x', yName: 'y', width: 2, name: 'Rate', type: 'Area'
                }],
                tooltip: { enable: true },
                height: '350', legendSettings: { visible: false },
        }
);
chart.appendTo('#Chart');
var range = new ej.charts.RangeNavigator({
        valueType: 'DateTime',
        value: [new Date('2017-09-01'), new Date('2018-02-01')],
        tooltip: { enable: true },
        enableDeferredUpdate: true,
        series: [{
                dataSource: datasrc, xName: 'x', yName: 'y', type: 'Area', width: 2,
        }],
        changed: (args) => {
                chart.primaryXAxis.zoomFactor = args.zoomFactor;
                chart.primaryXAxis.zoomPosition = args.zoomPosition;
                chart.dataBind();
        },
});
range.appendTo('#element');

