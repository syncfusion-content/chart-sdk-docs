<template>
  <ejs-chart3d id="chart" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis">
    <e-chart3d-series-collection>
      <e-chart3d-series :dataSource="data" type="Column" xName="x" yName="y"></e-chart3d-series>
    </e-chart3d-series-collection>
  </ejs-chart3d>
</template>

<script setup>
import { provide } from 'vue';
import { Chart3DComponent as EjsChart3d, Chart3DSeriesCollectionDirective as EChart3dSeriesCollection,
  Chart3DSeriesDirective as EChart3dSeries, ColumnSeries3D, Category3D } from '@syncfusion/ej2-vue-charts';

const data = [
  { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
  { x: 'Thu', y: 2 }, { x: 'Fri', y: 4 }
];
const primaryXAxis = { valueType: 'Category' };
const primaryYAxis = { title: 'Orders', allowDecimals: false };

provide('chart3d', [ColumnSeries3D, Category3D]);
</script>