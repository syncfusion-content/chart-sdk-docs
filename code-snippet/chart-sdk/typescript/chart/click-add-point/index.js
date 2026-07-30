var chartData = [
  { x: 20, y: 20 }, { x: 80, y: 80 }
];
var chart = new ej.charts.Chart({
  primaryXAxis: {
    edgeLabelPlacement: 'Shift', rangePadding: 'Additional', majorGridLines: { width: 0 }
  },
  chartArea: { border: { width: 0 } },
  primaryYAxis:
  {
    title: 'Value', interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }
  },
  series: [
    {
      dataSource: chartData, xName: 'x', yName: 'y', type: 'Line', width: 3,
      marker: { visible: true, isFilled: true, border: { width: 2, color: 'White' }, width: 13, height: 13 }
    }
  ],
  title: 'User supplied data',
  tooltip: { enable: true },
  chartMouseClick: function (args) {
    var isRemoved = false;
    if (args.axisData) {
      for (var i = 0; i < chart.series[0].points.length; i++) {
        var markerWidth = chart.series[0].marker.width / 2;
        var roundedX = Math.round(args.axisData.primaryXAxis) + markerWidth;
        var roundedY = Math.round(args.axisData.primaryYAxis) + markerWidth;
        var pointX = Math.round(chart.series[0].points[i].x) + markerWidth;
        var pointY = Math.round(chart.series[0].points[i].y) + markerWidth;
        if ((roundedX === pointX || roundedX + 1 === pointX || roundedX - 1 === pointX) &&
          (roundedY === pointY || roundedY + 1 === pointY || roundedY - 1 === pointY)) {
          if (chart.series[0].points.length > 1) {
            var points = chart.series[0].points;
            var duration = i === 0 || i === points[points.length - 1].index ? 500 : 0;
            chart.series[0].removePoint(i, duration);
          }
          isRemoved = true;
        }
      }
      if (!isRemoved) {
        chart.series[0].addPoint({ x: Math.round(args.axisData.primaryXAxis), y: Math.round(args.axisData.primaryYAxis) });
      }
    }
  },
  axisRangeCalculated: function (args) {
    if (args.axis.name === 'primaryXAxis') {
      if (args.interval < 10) {
        args.maximum = args.maximum + 10;
        args.minimum = args.minimum - 10;
        args.interval = 10;
      }
    }
    if (args.axis.name === 'primaryYAxis') {
      if (args.maximum <= 60) {
        args.interval = 10;
      }
    }
  }
}, '#addPoint');
