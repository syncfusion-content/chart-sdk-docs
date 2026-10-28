<template>
  <div id="app">
      <button @click='printChart'>Print</button>
    <ejs-chart id="container" ref="chart" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
      :beforePrint='beforePrintHandler'>
        <e-series :dataSource='seriesData' type='Column' xName='month' yName='sales' name='Sales'> </e-series>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Category } from "@syncfusion/ej2-vue-charts";



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
      title: 'Monthly Sales'
    };
  },
  provide: {
    chart: [LineSeries, Category]
  },
  methods: {
    beforePrintHandler: function (args) {
        console.log('beforePrint event was triggered');
      },
    printChart: function() {
      this.$refs.chart.print();
    },
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>