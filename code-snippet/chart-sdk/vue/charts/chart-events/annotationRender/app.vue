<template>
  <div id="app">
    <ejs-chart id="container" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
      :annotationRender='annotationRenderHandler'>
    <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='month' yName='sales' name='Sales'> </e-series>
    </e-series-collection>
        <e-annotations>
        <e-annotation content='Peak sales in August' coordinateUnits='Point' x='Aug' y='55'></e-annotation>
    </e-annotations></ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Category, ChartAnnotation } from "@syncfusion/ej2-vue-charts";



export default {
  name: "App",
  components: {
    "ejs-chart": ChartComponent,
    "e-series-collection": SeriesCollectionDirective,
    "e-series": SeriesDirective,
    "e-annotations": AnnotationsDirective,
    "e-annotation": AnnotationDirective
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
      title: 'Sales Analysis'
    };
  },
  provide: {
    chart: [LineSeries, Category, ChartAnnotation]
  },
  methods: {
    annotationRenderHandler: function (args) {
        console.log('Annotation render event was triggered');
      }
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>