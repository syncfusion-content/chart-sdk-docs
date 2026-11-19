var chartData = [];
var startDate = new Date(2026, 0, 1, 0, 0, 0);
var pointCount = 90 * 24;
var i;

for (i = 0; i < pointCount; i++) {
    chartData.push({
        date: new Date(startDate.getTime() + (i * 60 * 60 * 1000)),
        value: 40 + (Math.sin(i / 24) * 10) + ((i % 12) * 0.5)
    });
}

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        title: 'Date and time',
        labelFormat: 'MMM d',
        intervalType: 'Days',
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Value',
        minimum: 20,
        maximum: 70,
        interval: 10
    },
    series: [{
        type: 'Line',
        dataSource: chartData,
        xName: 'date',
        yName: 'value',
        name: 'Reading',
        animation: {
            enable: false
        }
    }],
    zoomSettings: {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        enableScrollbar: true,
        mode: 'X'
    },
    legendSettings: {
        visible: false
    },
    title: 'Hourly Readings'
}, '#element');

function showDateRange(visibleStart, visibleEnd, labelFormat, intervalType) {
    var minimum = chartData[0].date.getTime();
    var maximum = chartData[chartData.length - 1].date.getTime();
    var totalDuration = maximum - minimum;
    var start = Math.max(minimum, visibleStart.getTime());
    var end = Math.min(maximum, visibleEnd.getTime());
    var zoomFactor;
    var zoomPosition;

    if (totalDuration <= 0 || end <= start) {
        return;
    }

    zoomFactor = Math.min(
        1,
        Math.max(0.0001, (end - start) / totalDuration)
    );
    zoomPosition = Math.min(
        1 - zoomFactor,
        Math.max(0, (start - minimum) / totalDuration)
    );

    chart.primaryXAxis.zoomFactor = zoomFactor;
    chart.primaryXAxis.zoomPosition = zoomPosition;
    chart.primaryXAxis.labelFormat = labelFormat;
    chart.primaryXAxis.intervalType = intervalType;
    chart.refresh();
}

function getLastDataDate() {
    return chartData[chartData.length - 1].date;
}

document.getElementById('showLastMonth').onclick = function () {
    var end = getLastDataDate();
    var start = new Date(end.getTime());

    start.setMonth(start.getMonth() - 1);
    showDateRange(start, end, 'MMM d', 'Days');
};

document.getElementById('showLastDay').onclick = function () {
    var end = getLastDataDate();
    var start = new Date(end.getTime() - (24 * 60 * 60 * 1000));

    showDateRange(start, end, 'MMM d, HH:mm', 'Hours');
};

document.getElementById('resetRange').onclick = function () {
    chart.primaryXAxis.zoomFactor = 1;
    chart.primaryXAxis.zoomPosition = 0;
    chart.primaryXAxis.labelFormat = 'MMM d';
    chart.primaryXAxis.intervalType = 'Days';
    chart.refresh();
};