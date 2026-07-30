var heatmapData = [
  [1, 76],
  [19, 3]
];

var heatmap = new ej.heatmap.HeatMap({
  xAxis: {
    labels: ['Actual<br>Accept', 'Actual<br>Reject'],
    opposedPosition: true,
  },
  yAxis: {
    labels: ['Actual<br>Accept', 'Actual<br>Reject'],
    maxLabelLength: 50,
  },
  dataSource: heatmapData
});
heatmap.appendTo('#element');