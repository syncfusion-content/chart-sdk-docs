<template>
  <ejs-chart id="chart" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis">
    <e-series-collection>
      <e-series :dataSource="data" type="Column" xName="x" yName="y"></e-series>
    </e-series-collection>
  </ejs-chart>
</template>

<script setup>
import { provide } from 'vue';
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection,
  SeriesDirective as ESeries, ColumnSeries, Category } from '@syncfusion/ej2-vue-charts';

const data = [
  { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
  { x: 'Thu', y: 4 }, { x: 'Fri', y: 5 }
];
const primaryXAxis = { valueType: 'Category' };
const primaryYAxis = { title: 'Orders', allowDecimals: false };

provide('chart', [ColumnSeries, Category]);
</script>