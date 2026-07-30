var dataValues = [
    { x: 'Asia', car: 120, trucks: 90, bike: 180, cycle: 90 },
    { x: 'Canada', car: 100, trucks: 80, bike: 90, cycle: 80 },
    { x: 'Europe', car: 80, trucks: 90, bike: 60, cycle: 50 },
    { x: 'Africa', car: 40, trucks: 20, bike: 30, cycle: 30 },
    { x: 'Mexico', car: 40, trucks: 50, bike: 80, cycle: 50 },
    { x: 'US', car: 140, trucks: 90, bike: 75, cycle: 70 },
  ];
  var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
      majorGridLines: { width: 0 },
      minorGridLines: { width: 0 },
      majorTickLines: { width: 0 },
      minorTickLines: { width: 0 },
      interval: 1,
      lineStyle: { width: 0 },
      labelIntersectAction: 'Rotate45',
      valueType: 'Category',
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
      title: 'Sales',
      lineStyle: { width: 0 },
      majorTickLines: { width: 0 },
      majorGridLines: { width: 1 },
      minorGridLines: { width: 1 },
      minorTickLines: { width: 0 },
      labelFormat: '{value}K',
    },
    chartArea: {
      border: {
        width: 0,
      },
    },
    //Initializing Chart Series
    series: [
      {
        type: 'StackingColumn',
        dataSource: dataValues,
        xName: 'x',
        width: 2,
        yName: 'car',
        name: 'Car',
      },
      {
        type: 'StackingColumn',
        dataSource: dataValues,
        xName: 'x',
        width: 2,
        yName: 'trucks',
        name: 'Trucks',
      },
      {
        type: 'StackingColumn',
        dataSource: dataValues,
        xName: 'x',
        width: 2,
        yName: 'bike',
        name: 'Bike',
      },
      {
        type: 'StackingColumn',
        dataSource: dataValues,
        xName: 'x',
        width: 2,
        yName: 'cycle',
        name: 'Cycle',
      },
    ],
    //Initializing Chart title
    title: 'Vehicle Sales by Region',
    //Initializing User Interaction Tooltip
    tooltip: {
      enable: true,
      enableHighlight: true,
    },
  });
  chart.appendTo('#element');
  var sortMode = new ej.dropdowns.DropDownList({
    index: 0,
    placeholder: 'Select Range Bar Color',
    width: 120,
    change: () => {
      sortDataSource(sortMode.value + '');
    },
  });
  sortMode.appendTo('#sortMode');
  document.getElementById('decending').onchange = () => {
    sortDataSource(sortMode.value + '');
  };
  function sortDataSource(value) {
    var element = document.getElementById('decending');
    var isDecending = element.checked;
    element.disabled = false;
    var sortData = [];
    if (value === 'X') {
      sortData = new ej.charts.sort(dataValues, ['x'], isDecending);
    } else if (value === 'Y') {
      sortData = new ej.charts.sort(
        dataValues,
        ['car', 'trucks', 'bike', 'cycle'],
        isDecending
      );
    } else {
      element.disabled = true;
      sortData = dataValues;
    }
    chart.series[0].animation.enable = false;
    chart.series[1].animation.enable = false;
    chart.series[2].animation.enable = false;
    chart.series[3].animation.enable = false;
    chart.series[0].dataSource = sortData;
    chart.series[1].dataSource = sortData;
    chart.series[2].dataSource = sortData;
    chart.series[3].dataSource = sortData;
    chart.refresh();
  }
  