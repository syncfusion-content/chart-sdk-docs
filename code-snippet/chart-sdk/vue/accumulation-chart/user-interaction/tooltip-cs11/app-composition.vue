<template>
  <div id="app">
    <ejs-accumulationchart id="container" :title="title" :tooltip="tooltip" :tooltipRender="tooltipRender">
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource="seriesData" type="Pie" xName="x" yName="y" name="Sales"></e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script setup lang="ts">
import { provide } from 'vue';
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PieSeries, AccumulationTooltip } from '@syncfusion/ej2-vue-charts';
import type { ITooltipRenderEventArgs } from '@syncfusion/ej2-charts';

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
const tooltip = { enable: true };
const title = 'Sales by Country';

const tooltipRender = (args: ITooltipRenderEventArgs): void => {
  const rawData: SalesData = args.data.rawData as SalesData;
  if (rawData) {
    args.text = 'Sales: <b>' + rawData.y + '</b><br/>' +
      'Region: <b>' + rawData.region + '</b><br/>' +
      'Growth: <b>' + rawData.growth + '%</b>';
  }
};

provide('accumulationchart', [PieSeries, AccumulationTooltip]);
</script>
<style>
#container {
  height: 350px;
}
</style>