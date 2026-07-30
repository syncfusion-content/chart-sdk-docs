var onInit = true;
var measureList = {};
var chart;
var selectedCells;
var chartSeries;
var pivotObj = new ej.pivotview.PivotView({
  dataSourceSettings: {
    dataSource: pivotData,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    filters: []
  },
  width: '100%',
  height: 290,
  dataBound: function () {
    if (onInit) {
      for (var i = 0; i < pivotObj.dataSourceSettings.values.length; i++) {
        var value = pivotObj.dataSourceSettings.values[i];
        measureList[value.name] = value.caption || value.name;
      }
      pivotObj.grid.selectionModule.selectCellsByRange({ cellIndex: 1, rowIndex: 1 }, { cellIndex: 3, rowIndex: 3 });
    }
  },
  gridSettings: {
    allowSelection: true,
    selectionSettings: { mode: 'Cell', type: 'Multiple', cellSelectionMode: 'Box' }
  },
  cellSelected: function (args) {
    selectedCells = args.selectedCellsInfo;
    if (selectedCells && selectedCells.length > 0) {
      chartSeries = frameChartSeries();
      chartUpdate();
    }
  }
});
pivotObj.appendTo('#PivotTable');

function frameChartSeries() {
  var columnGroupObject = {};
  for (var b = 0; b < selectedCells.length; b++) {
    var cell = selectedCells[b];
    if (cell.measure !== '') {
      var columnSeries = (pivotObj.dataSourceSettings.values.length > 1 && measureList[cell.measure]) ?
        (cell.columnHeaders.toString() + ' ~ ' + measureList[cell.measure]) : cell.columnHeaders.toString();
      if (columnGroupObject[columnSeries]) {
        columnGroupObject[columnSeries].push({ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) });
      }
      else {
        columnGroupObject[columnSeries] = [{ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) }];
      }
    }
  }
  var columnKeys = Object.keys(columnGroupObject);
  var chartSeries = [];
  for (var c = 0; c < columnKeys.length; c++) {
    var key = columnKeys[c];
    chartSeries.push({
      dataSource: columnGroupObject[key],
      xName: 'x',
      yName: 'y',
      type: 'Column',
      name: key
    });
  }
  return chartSeries;
}
function chartUpdate() {
  if (onInit) {
    onInit = false;
    chart = new ej.charts.Chart({
      title: 'Sales Analysis',
      legendSettings: {
        visible: true
      },
      tooltip: {
        enable: true
      },
      primaryYAxis: {
        title: pivotObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name; }).join(' ~ '),
      },
      primaryXAxis: {
        valueType: 'Category',
        title: pivotObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name; }).join(' ~ '),
        labelIntersectAction: 'Rotate45'
      },
      series: chartSeries,
    }, '#Chart');
  }
  else {
    chart.series = chartSeries;
    chart.primaryXAxis.title = pivotObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name; }).join(' ~ ');
    chart.primaryYAxis.title = pivotObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name; }).join(' ~ ');
    chart.refresh();
  }
}

