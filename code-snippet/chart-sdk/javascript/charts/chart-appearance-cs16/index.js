var chartData1 = [
    { x: 16, y: 2 },
    { x: 17, y: 14 },
    { x: 18, y: 7 },
    { x: 19, y: 7 },
    { x: 20, y: 10 }
];

var chartData2 = [
    { x: 16, y: 12 },
    { x: 17, y: 10 },
    { x: 18, y: 17 },
    { x: 19, y: 20 },
    { x: 20, y: 16 }
];

var chartData3 = [
    { x: 16, y: 7 },
    { x: 17, y: 7 },
    { x: 18, y: 11 },
    { x: 19, y: 8 },
    { x: 20, y: 24 }
];

function getAxisName(series) {
    return series.yAxisName || 'primaryYAxis';
}

function setAssociatedAxisVisibility(args) {
    var chart = args.chart;
    var clickedSeries = args.series;
    var axisName = getAxisName(clickedSeries);
    var clickedSeriesWillBeVisible = !clickedSeries.visible;
    var hasVisibleSeries = false;
    var i;

    for (i = 0; i < chart.series.length; i++) {
        var series = chart.series[i];

        if (getAxisName(series) === axisName) {
            var projectedVisibility = series === clickedSeries
                ? clickedSeriesWillBeVisible
                : series.visible;

            if (projectedVisibility) {
                hasVisibleSeries = true;
                break;
            }
        }
    }

    if (axisName === 'primaryYAxis') {
        chart.primaryYAxis.visible = hasVisibleSeries;
        return;
    }

    for (i = 0; i < chart.axes.length; i++) {
        if (chart.axes[i].name === axisName) {
            chart.axes[i].visible = hasVisibleSeries;
            break;
        }
    }
}

var chart = new ej.charts.Chart({
    margin: {
        left: 100,
        right: 100
    },
    primaryXAxis: {
        valueType: 'Double',
        title: 'Overs'
    },
    primaryYAxis: {
        title: 'Primary runs',
        minimum: 0,
        maximum: 25,
        interval: 5
    },
    axes: [{
        name: 'yAxis1',
        opposedPosition: true,
        title: 'Secondary runs',
        minimum: 0,
        maximum: 25,
        interval: 5,
        majorGridLines: {
            width: 0
        }
    }, {
        name: 'yAxis2',
        opposedPosition: true,
        title: 'West Indies runs',
        minimum: 0,
        maximum: 30,
        interval: 5,
        majorGridLines: {
            width: 0
        }
    }],
    series: [{
        type: 'Column',
        dataSource: chartData1,
        xName: 'x',
        yName: 'y',
        name: 'England - Primary',
        fill: '#1e90ff'
    }, {
        type: 'Column',
        dataSource: chartData2,
        xName: 'x',
        yName: 'y',
        name: 'England - Secondary',
        fill: '#2e8b57',
        yAxisName: 'yAxis1'
    }, {
        type: 'Column',
        dataSource: chartData3,
        xName: 'x',
        yName: 'y',
        name: 'West Indies',
        fill: '#b22222',
        yAxisName: 'yAxis2'
    }],
    legendSettings: {
        visible: true,
        toggleVisibility: true
    },
    legendClick: function (args) {
        setAssociatedAxisVisibility(args);
    },
    title: 'Cricket Match Analysis'
}, '#element');