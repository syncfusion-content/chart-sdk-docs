<template>
  <div id="app">
    <ejs-chart id="container" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
      :tooltip='tooltip'
      :sharedTooltipRender='sharedTooltipRenderHandler'>
    <e-series-collection>
        <e-series :dataSource='seriesData' type='StepLine' xName='x' yName='y' name='China' width=2 :marker='marker'> </e-series>
        <e-series :dataSource='seriesData' type='Column' xName='x' yName='y1' name='USA'> </e-series>
    </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, StepLineSeries, ColumnSeries, Legend, Tooltip, DateTime } from "@syncfusion/ej2-vue-charts";



export default {
  name: "App",
  components: {
    "ejs-chart": ChartComponent,
    "e-series-collection": SeriesCollectionDirective,
    "e-series": SeriesDirective
  },
  data() {
    return {
      seriesData: [
        { x: new Date(1975, 0, 1), y: 16, y1: 10, y2: 4.5 },
        { x: new Date(1980, 0, 1), y: 12.5, y1: 7.5, y2: 5 },
        { x: new Date(1985, 0, 1), y: 19, y1: 11, y2: 6.5 },
        { x: new Date(1990, 0, 1), y: 14.4, y1: 7, y2: 4.4 },
        { x: new Date(1995, 0, 1), y: 11.5, y1: 8, y2: 5 },
        { x: new Date(2000, 0, 1), y: 14, y1: 6, y2: 1.5 },
        { x: new Date(2005, 0, 1), y: 10, y1: 3.5, y2: 2.5 },
        { x: new Date(2010, 0, 1), y: 16, y1: 7, y2: 3.7 }
      ],
      primaryXAxis: {
        valueType: 'DateTime'
      },
      primaryYAxis: {
        title: 'Rate (%)'
      },
      tooltip: {
        enable: true,
        shared: true
      },
      title: 'Unemployment Rates 1975-2010'
    };
  },
  provide: {
    chart: [StepLineSeries, ColumnSeries, Legend, Tooltip, DateTime]
  },
  methods: {
    sharedTooltipRenderHandler: function (args) {
        args.headerText = 'Shared Tooltip';
        if (args.text && args.text.length) {
            args.text = args.text.map((line) => {
                return line.replace(':', ' value:') + '%';
            });
        }
      }
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>