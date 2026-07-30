var updatedData = [
  { x: 'Jewellery', y: 75 },
  { x: 'Shoes', y: 45 },
  { x: 'Footwear', y: 73 },
  { x: 'Pet Services', y: 53 },
  { x: 'Business Clothing', y: 85 },
  { x: 'Office Supplies', y: 68 },
  { x: 'Food', y: 45 }
];

var chart = new ej.charts.Chart({
  primaryXAxis: {
    valueType: 'Category', majorGridLines: { width: 0 }, labelStyle: { size: '12px' }, labelIntersectAction: 'Rotate90'
  },
  chartArea: { border: { width: 0 } },
  primaryYAxis:
  {
    title: 'Sales (in percentage)', labelFormat: '{value}%', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, interval: 5, minimum: 0, maximum: 100
  },
  series: [
    {
      dataSource: updatedData, xName: 'x', yName: 'y', type: 'Column',
      cornerRadius: { topLeft: 15, topRight: 15 }, columnWidth: 0.5
    }
  ],
  title: 'Sales by product',
  axisRangeCalculated: function (args) {
    if (args.axis.name === 'primaryYAxis') {
      args.maximum = args.maximum > 100 ? 100 : args.maximum;
      if (args.maximum > 80) {
        args.interval = 20;
      }
      else if (args.maximum > 40) {
        args.interval = 10;
      }
    }
  }
}, '#element');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.getElementById('update').onclick = () => {
  var newData = updatedData.map(function (item) {
    var value = getRandomInt(10, 90);
    return { x: item.x, y: value };
  });
  if (chart.series.length > 0) {
    chart.series[0].setData(newData, 500);
  }
}
