window.pointIndex = -1;
var data = [
  {
    x: 'SUV',
    y: 25,
    z: [
      {
        title: 'Automobile Sales in the SUV Segment',
        x: 'Toyota',
        y: 8,
        z: [
          { x: '2000', y: 20 },
          { x: '2001', y: 30 },
          { x: '2002', y: 40 },
        ],
      },
      { x: 'Ford', y: 12 },
      { x: 'GM', y: 17 },
      { x: 'Renault', y: 6 },
    ],
  },
  {
    x: 'Car',
    y: 37,
    z: [
      { title: 'Automobile Sales in the Car Segment', x: 'Toyota', y: 7 },
      { x: 'Chrysler', y: 12 },
      { x: 'Nissan', y: 9 },
      { x: 'Ford', y: 15 },
    ],
  },
  {
    x: 'Pickup',
    y: 15,
    z: [
      { title: 'Automobile Sales in the Pickup Segment', x: 'Nissan', y: 9 },
      { x: 'Chrysler', y: 4 },
      { x: 'Ford', y: 7 },
      { x: 'Toyota', y: 20 },
    ],
  },
  {
    x: 'Minivan',
    y: 23,
    z: [
      { title: 'Automobile Sales in the Minivan Segment', x: 'Hummer', y: 11 },
      { x: 'Ford', y: 5 },
      { x: 'GM', y: 12 },
      { x: 'Chrysler', y: 3 },
    ],
  },
];

var click = function (args) {
  if (pie.series[0].name !== 'Level 3') {
    switch (args.pointIndex) {
      case 0:
        pie.series[0].dataSource = data[0].z[0].z;
        pie.title = 'SUV Sales by Years';
        pie.series[0].name = 'Level 3';
        grid.columns[0].headerText = 'Year';
        grid.refresh();
        pie.refresh();
        break;
    }
    grid.dataSource = pie.series[0].dataSource;
  }
};
var pointClick = function (args) {
  if (ej.charts.getElement(pie.element.id + '_Series_' + args.seriesIndex + '_Point_' + args.pointIndex)) {
    pie.series[0].dataSource = data[args.pointIndex].z;
    pie.title = data[args.pointIndex].z[0].title;
    window.pointIndex = args.pointIndex;

    pie.series[0].name = 'Level 2';
    pie.series[0].innerRadius = '30%';
    pie.annotations = [
      {
        content:
          '<div id="back" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
          '<img src="https://ej2.syncfusion.com/javascript/demos/src/chart/images/back.png" id="back" />',
        region: 'Series',
        x: '50%',
        y: '50%',
      },
    ];
    pie.pointClick = click;
    var secondlevelpie = pie;
  }
  grid.dataSource = pie.series[0].dataSource;
  grid.columns[0].headerText = data[args.pointIndex].x;
};

var instance = {
  series: [
    {
      dataSource: data,
      dataLabel: {
        visible: true,
        position: 'Inside',
      },
      radius: '70%',
      xName: 'x',
      yName: 'y',
      startAngle: 0,
      endAngle: 360,
      innerRadius: '0%',
      name: 'Level 1',
    },
  ],
  enableSmartLabels: false,
  legendSettings: { visible: true },
  chartMouseClick: (args) => {
    if (args.target.indexOf('back') > -1) {
      if (pie.series[0].name === 'Level 3') {
        pie.series[0].dataSource = data[window.pointIndex].z;
        pie.series[0].name = 'Level 2';
        pie.title = data[window.pointIndex].z[0].title;
        pie.series[0].innerRadius = '30%';
        grid.dataSource = pie.series[0].dataSource;
        grid.columns[0].headerText = data[window.pointIndex].x;
        grid.refresh();
        pie.refresh();
      } else if (pie.series[0].name === 'Level 2') {
        pie.series[0].dataSource = data;
        pie.series[0].name = 'Level 1';
        pie.series[0].innerRadius = '0%';
        pie.title = 'Automobile Sales by Category';
        pie.annotations = [{}];
        pie.pointClick = pointClick;
        grid.dataSource = pie.series[0].dataSource;
        grid.columns[0].headerText = 'Vehicle';
      }
    }
    grid.dataSource = pie.series[0].dataSource;
  },
  pointClick: pointClick,
  title: 'Automobile Sales by Category',
};
var pie = new ej.charts.AccumulationChart(instance);
pie.appendTo('#container');

var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'x', headerText: 'Vehicle', type: 'string' },
    { field: 'y', headerText: 'Sales', type: 'string' },
  ],
});
grid.appendTo('#Grid');