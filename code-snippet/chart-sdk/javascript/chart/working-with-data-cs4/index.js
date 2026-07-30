var intl = new ej.base.Internationalization();
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Day',
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift',
        skeleton: 'yMMM',
        skeletonType: 'Date',
        scrollbarSettings: {
            range: {
                minimum: new Date(2009, 0, 1),
                maximum: new Date(2014, 0, 1)
            },
            enable: true,
        }
    },
    primaryYAxis: {
        title: 'Server Load',
        labelFormat: '{value}MB'
    },
    series: [{
        dataSource: GetDateTimeData(new Date(2009, 0, 1), new Date(2009, 8, 1)),
        xName: 'x', yName: 'y',
        type: 'Line', animation: { enable: false },
    }],
    height: '450',
    title: 'Network Load',
    crosshair: { enable: true, lineType: 'Vertical' },
    tooltip: { enable: true, shared: true },
    legendSettings: { visible: true },
    scrollEnd: function (args) {
        if (lazymode.value === 'Range') {
            chart.series[0].dataSource = GetDateTimeData(args.currentRange.minimum, args.currentRange.maximum);
        }
        chart.dataBind();
    },
}, '#element');

function GetDateTimeData(start, end) {
    var series1 = [];
    var date;
    var value = 30;
    var option = {
        skeleton: 'full',
        type: 'dateTime'
    };
    var dateParser = intl.getDateParser(option);
    var dateFormatter = intl.getDateFormat(option);
    for (var i = 0; start <= end; i++) {
        date = Date.parse(dateParser(dateFormatter(start)));
        if (Math.random() > .5) {
            value += (Math.random() * 10 - 5);
        }
        else {
            value -= (Math.random() * 10 - 5);
        }
        if (value < 0) {
            value = getRandomInt(20, 40);
        }
        var point1 = { x: new Date(date), y: Math.round(value) };
        new Date(start.setDate(start.getDate() + 1));
        series1.push(point1);
    }
    return series1;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


