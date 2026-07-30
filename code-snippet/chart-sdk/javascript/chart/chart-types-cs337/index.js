var stackedData = [
  { x: 'Jan', y: 6, y1: 6, y2: -1 },
  { x: 'Feb', y: 8, y1: 8, y2: -1.5 },
  { x: 'Mar', y: 12, y1: 11, y2: -2 },
  { x: 'Apr', y: 15, y1: 16, y2: -2.5 },
  { x: 'May', y: 20, y1: 21, y2: -3 },
  { x: 'Jun', y: 24, y1: 25, y2: -3.5 },
  { x: 'Jul', y: 28, y1: 27, y2: -4 },
  { x: 'Aug', y: 32, y1: 31, y2: -4.5 },
  { x: 'Sep', y: 33, y1: 34, y2: -5 },
  { x: 'Oct', y: 35, y1: 34, y2: -5.5 },
  { x: 'Nov', y: 40, y1: 41, y2: -6 },
  { x: 'Dec', y: 42, y1: 42, y2: -6.5 }
];
var chart = new ej.charts.Chart({
  primaryXAxis: {
    valueType: 'Category',
    title: 'Months'
  },
  primaryYAxis: {
    title: 'Percentage (%)',
    minimum: -20,
    maximum: 100,
    labelFormat: '{value}%',
    edgeLabelPlacement: 'Shift'
  },
  series: [
    {
      //Series type as stacked bar
      type: 'StackingBar',
      name: 'Apple',
      dataSource: stackedData,
      xName: 'x',
      yName: 'y',
      border: { width: 2, color: '#ff4251', dashArray: '5,5' }
    },
    {
      type: 'StackingBar',
      name: 'Orange',
      dataSource: stackedData,
      xName: 'x',
      yName: 'y1',
      border: { width: 2, color: '#66BDB7', dashArray: '5,5' }
    },
    {
      type: 'StackingBar',
      name: 'Wastage',
      dataSource: stackedData,
      xName: 'x',
      yName: 'y2',
      border: { width: 2, color: '#794F1B', dashArray: '5,5' }
    }
  ],
  title: 'Sales Comparison'
},
  '#element'
);

