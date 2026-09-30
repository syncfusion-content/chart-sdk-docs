<template>
  <div id="app">
    <ejs-chart id="container" :title="title" :primaryXAxis="primaryXAxis" :tooltip="tooltip" :tooltipRender="tooltipRender">
      <e-series-collection>
        <e-series :dataSource="seriesData" type="Column" xName="month" yName="sales" name="Sales"></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup lang="ts">
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category, Tooltip } from "@syncfusion/ej2-vue-charts";
import type { ITooltipRenderEventArgs } from "@syncfusion/ej2-charts";

interface SalesData {
  month: string;
  sales: number;
  country: string;
  growth: number;
}

const seriesData: SalesData[] = [
  { month: 'Jan', sales: 35, country: 'USA', growth: 12.5 },
  { month: 'Feb', sales: 42, country: 'UK', growth: 15.2 },
  { month: 'Mar', sales: 38, country: 'India', growth: 10.8 },
  { month: 'Apr', sales: 48, country: 'Germany', growth: 18.4 }
];
const primaryXAxis = { valueType: 'Category' };
const tooltip = { enable: true };
const title = 'Monthly Sales';
const tooltipRender = (args: ITooltipRenderEventArgs): void => {
  const rawData: SalesData = args.data.rawData as SalesData;
  if (rawData) {
    args.text = 'Sales: <b>' + rawData.sales + '</b><br/>' +
      'Country: <b>' + rawData.country + '</b><br/>' +
      'Growth: <b>' + rawData.growth + '%</b>';
  }
};

provide('chart', [ColumnSeries, Category, Tooltip]);
</script>
<style>
#container {
  height: 350px;
}
</style>