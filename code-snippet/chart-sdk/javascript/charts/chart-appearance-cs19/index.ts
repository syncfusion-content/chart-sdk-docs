


import { ChartTheme, Chart, ColumnSeries, Category, Legend, DataLabel, Tooltip, ILoadedEventArgs, IMouseEventArgs } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, DataLabel, Category, Legend, Tooltip);
import { Browser } from '@syncfusion/ej2-base';

var previousTarget = null;
let chart: Chart = new Chart({
  primaryXAxis: {
    valueType: 'Category', interval: 1,
  },
  series: [
    {
      type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Gold',
      dataSource: [{ x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }], animation: { enable: false },
      fill: 'red', opacity: 0.8
    },
    {
      type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Silver',
      dataSource: [{ x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }], animation: { enable: false },
      fill: 'green', opacity: 0.8
    },
    {
      type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Bronze',
      dataSource: [{ x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }], animation: { enable: false },
      fill: 'orange', opacity: 0.8
    }
  ],
  chartMouseClick: (args: IMouseEventArgs) => {
    var flag = false;
    if (((args.target).indexOf('chart_legend_text') > -1) || ((args.target).indexOf('chart_legend_shape') > -1) ||
      (args.target).indexOf('chart_legend_shape_marker_') && !(args.target).indexOf('chart_legend_element')) {
      var ids = ((args.target).indexOf('chart_legend_text') > -1) ?
        (args.target).split('chart_legend_text_')[1] : args.target.split('chart_legend_shape_marker_')[1] || args.target.split('chart_legend_shape_')[1];
      var chart1 = document.getElementById("element").ej2_instances[0];
      for (var i = 0; i < chart1.series.length; i++) {
        chart1.series[i].visible = false;
      }
      if (ids == previousTarget) {
        for (var j = 0; j < chart1.series.length; j++)
          chart1.series[j].visible = true;
        chart1.series[ids].visible = false;
        previousTarget = null;
        flag = true;
      }
      if (!flag)
        previousTarget = ids;
    }
  },
  title: 'Olympic Medal Counts - RIO', tooltip: { enable: true },

});
chart.appendTo('#element');



