<template>
  <div id="app">
    <ejs-circularchart3d id="container" :tilt="tilt" :legendSettings="legendSettings" :tooltip="tooltip" :tooltipRender="tooltipRender" :title="title">
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource="seriesData" xName="x" yName="y" name="Sales"></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script setup lang="ts">
import { provide } from 'vue';
import { CircularChart3DComponent as EjsCircularchart3d, CircularChart3DSeriesCollectionDirective as ECircularchart3dSeriesCollection, CircularChart3DSeriesDirective as ECircularchart3dSeries, PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D } from '@syncfusion/ej2-vue-charts';
import type { CircularChart3DTooltipRenderEventArgs } from '@syncfusion/ej2-charts';

interface SalesData {
  x: string;
  y: number;
  region: string;
  growth: number;
}

const seriesData: SalesData[] = [
  { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
  { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
  { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
  { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
];
const tilt = -45;
const legendSettings = { visible: false };
const tooltip = { enable: true };
const title = 'Sales by Country';
const tooltipRender = (args: CircularChart3DTooltipRenderEventArgs): void => {
  const rawData: SalesData = args.data.rawData as SalesData;
  if (rawData) {
    args.text = 'Sales: <b>' + rawData.y + '</b><br/>' +
      'Region: <b>' + rawData.region + '</b><br/>' +
      'Growth: <b>' + rawData.growth + '%</b>';
  }
};

provide('circularchart3d', [PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D]);
</script>
<style>
#container {
  height: 350px;
}
</style>