<template>
  <div id="app">
    <ejs-chart id="container" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
      :textRender='textRenderHandler'>
        <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales' :marker='marker'> </e-series>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Legend, DataLabel, Category } from "@syncfusion/ej2-vue-charts";



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
      marker: {
        dataLabel: { visible: true }
      },
      title: 'Sales Analysis'
    };
  },
  provide: {
    chart: [LineSeries, Legend, DataLabel, Category]
  },
  methods: {
    textRenderHandler: function (args) {
        if (typeof args.point?.y === 'number') {
            args.text = `$${args.point.y}K`;
        }
        if (args.point?.x === 'Aug') {
            args.text = `${args.text} ★`;
            args.color = '#e74c3c';
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