<template>
  <div id="app">
    <ejs-chart id="container" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
      :scrollChanged='scrollChangedHandler'>
        <e-series :dataSource='seriesData' type='Column' xName='month' yName='sales' name='Sales'> </e-series>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, Category, Legend, DataLabel, ScrollBar, Zoom } from "@syncfusion/ej2-vue-charts";

const seriesData = [
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
];
const primaryXAxis = {
  valueType: 'Category',
  scrollbarSettings: { enable: true }
};
const primaryYAxis = {
  labelFormat: '${value}K'
};
const title = 'Sales Analysis';

const scrollChangedHandler = (args) => {
  console.log('scroll changed event was triggered');
};

provide('chart', [LineSeries, Category, Legend, DataLabel, ScrollBar, Zoom]);
</script>
<style>
#container {
  height: 350px;
}
</style>