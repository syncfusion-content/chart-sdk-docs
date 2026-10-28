<template>
  <div id="app">
    <ejs-chart id="container" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
      :zoomSettings='zoomSettings'
      :zoomComplete='zoomCompleteHandler'>
    <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales'> </e-series>
    </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Category, Legend, DataLabel, Zoom } from "@syncfusion/ej2-vue-charts";



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
        { month: "Jan", sales: 35 },
        { month: "Feb", sales: 28 },
        { month: "Mar", sales: 34 },
        { month: "Apr", sales: 32 },
        { month: "May", sales: 40 },
        { month: "Jun", sales: 32 },
        { month: "Jul", sales: 35 },
        { month: "Aug", sales: 55 },
        { month: "Sep", sales: 38 },
        { month: "Oct", sales: 30 },
        { month: "Nov", sales: 25 },
        { month: "Dec", sales: 32 }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      primaryYAxis: {
        labelFormat: '${value}K'
      },
      zoomSettings: {
        enableSelectionZooming: true,
        enablePan: true,
        mode: 'X'
      },
      title: 'Sales Analysis'
    };
  },
  provide: {
    chart: [LineSeries, Category, Legend, DataLabel, Zoom]
  },
  methods: {
    zoomCompleteHandler: function (args) {
        console.log('Zoom complete event was triggered');
      }
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>