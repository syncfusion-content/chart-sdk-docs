<template>
  <div id="app">
    <ejs-chart id="container" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
      :legendSettings='legendSettings'
      :legendClick='legendClickHandler'>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'> </e-series>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='silver' name='Silver'> </e-series>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='bronze' name='Bronze'> </e-series>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Legend, Category } from "@syncfusion/ej2-vue-charts";

const seriesData = [
  { country: "USA", gold: 50, silver: 70, bronze: 45 },
  { country: "China", gold: 40, silver: 60, bronze: 55 },
  { country: "Japan", gold: 70, silver: 60, bronze: 50 },
  { country: "Australia", gold: 60, silver: 56, bronze: 40 },
  { country: "France", gold: 50, silver: 45, bronze: 35 },
  { country: "Germany", gold: 40, silver: 30, bronze: 22 },
  { country: "Italy", gold: 40, silver: 35, bronze: 37 },
  { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
];
const primaryXAxis = {
  valueType: 'Category',
  title: 'Countries'
};
const primaryYAxis = {
  minimum: 0, maximum: 80, interval: 20,
  title: 'Medals'
};
const legendSettings = {
  visible: true, position: 'Top'
};
const title = 'Olympic Medals';

const legendClickHandler = (args) => {
  console.log('legendClick:', {
            legendText: args.legendText,
            seriesIndex: args.series?.index,
            isVisible: args.series?.visible
        });
};

provide('chart', [ColumnSeries, Legend, Category]);
</script>
<style>
#container {
  height: 350px;
}
</style>