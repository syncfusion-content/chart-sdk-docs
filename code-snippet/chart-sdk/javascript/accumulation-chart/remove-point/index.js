var addData = [
  { x: "Germany", y: 72 },
  { x: "Russia", y: 103.1 },
  { x: "Brazil", y: 139.1 },
  { x: "India", y: 462.1 },
  { x: "China", y: 721.4 },
  { x: "USA", y: 286.9 },
  { x: "Great Britain", y: 115.1 },
  { x: "Nigeria", y: 97.2 }
];

var chart = new ej.charts.Chart({
  primaryXAxis: {
    valueType: 'Category', enableTrim: false, majorTickLines: { width: 0 }, majorGridLines: { width: 0 }
  },
  chartArea: { border: { width: 1 } },
  primaryYAxis:
  {
    minimum: 0, maximum: 800, labelFormat: '{value}M', edgeLabelPlacement: 'Shift'
  },
  series: [
    {
      dataSource: addData, xName: 'x', yName: 'y', type: 'Spline', width: 2, name: 'Users',
      marker: { visible: true, dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600' } } }
    }
  ],
  title: 'Internet Users - 2016',
  legendSettings: {
    visible: false
  }
}, '#element');

document.getElementById('remove').onclick = function () {
  chart.series[0].removePoint(0);
}
