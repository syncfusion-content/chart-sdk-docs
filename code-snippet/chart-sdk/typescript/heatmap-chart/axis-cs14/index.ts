import { HeatMap, Tooltip, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Tooltip, Legend);

let heatmapData: any[] = [
  [1, 76],
  [19, 3]
];

let heatmap: HeatMap = new HeatMap({
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