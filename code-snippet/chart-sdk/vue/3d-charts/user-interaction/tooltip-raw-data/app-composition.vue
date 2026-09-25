<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :tooltip="tooltip" :tooltipRender="tooltipRender" :wallColor="wallColor" :enableRotation="enableRotation" :rotation="rotation" :tilt="tilt" :depth="depth" :title="title">
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="chartData" type="Column" xName="x" yName="y" name="Sales"></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script setup>
import { provide } from 'vue';
import { Chart3DComponent as EjsChart3d, Chart3DSeriesCollectionDirective as EChart3dSeriesCollection, Chart3DSeriesDirective as EChart3dSeries, ColumnSeries3D, Category3D, Tooltip3D } from '@syncfusion/ej2-vue-charts';
import type { Chart3DTooltipRenderEventArgs } from '@syncfusion/ej2-charts';

interface SalesData {
  x: string;
  y: number;
  region: string;
  growth: number;
}

const chartData: SalesData[] = [
  { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
  { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
  { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
  { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
];
const primaryXAxis = { valueType: 'Category', title: 'Country' };
const primaryYAxis = { title: 'Sales' };
const tooltip = { enable: true };
const wallColor = 'transparent';
const enableRotation = true;
const rotation = 7;
const tilt = 10;
const depth = 100;
const title = 'Sales by Country';
const tooltipRender = (args: Chart3DTooltipRenderEventArgs): void => {
  const rawData: SalesData = args.data.rawData as SalesData;
  if (rawData) {
    args.text = 'Sales: <b>' + rawData.y + '</b><br/>' +
      'Region: <b>' + rawData.region + '</b><br/>' +
      'Growth: <b>' + rawData.growth + '%</b>';
  }
};

provide('chart3d', [ColumnSeries3D, Category3D, Tooltip3D]);
</script>
<style>
#container {
  height: 350px;
}
</style>