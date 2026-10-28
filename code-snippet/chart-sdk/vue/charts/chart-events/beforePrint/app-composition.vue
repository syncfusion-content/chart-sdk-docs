<template>
  <div id="app">
      <button @click='printChart'>Print</button>
    <ejs-chart id="container" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
      :beforePrint='beforePrintHandler'>
    <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='month' yName='sales' name='Sales'> </e-series>
    </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

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
  valueType: 'Category'
};
const primaryYAxis = {
  labelFormat: '${value}K'
};
const title = 'Monthly Sales';

const beforePrintHandler = (args) => {
  console.log('beforePrint event was triggered');
};
const printChart = () => {
  chartInstance.print();
};

provide('chart', [LineSeries, Category]);
</script>
<style>
#container {
  height: 350px;
}
</style>