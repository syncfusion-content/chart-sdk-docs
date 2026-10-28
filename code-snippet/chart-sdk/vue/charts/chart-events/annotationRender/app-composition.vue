<template>
  <div id="app">
    <ejs-chart
      id="container"
      :title="title"
      :primaryXAxis="primaryXAxis"
      :primaryYAxis="primaryYAxis"
      :annotations="annotations"
      :annotationRender="annotationRenderHandler"
    >
      <e-series-collection>
        <e-series
          :dataSource="seriesData"
          type="Line"
          xName="month"
          yName="sales"
          name="Sales">
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script setup>
import { provide } from "vue";
import {
  ChartComponent as EjsChart,
  SeriesCollectionDirective as ESeriesCollection,
  SeriesDirective as ESeries,
  LineSeries,
  Category,
  ChartAnnotation
} from "@syncfusion/ej2-vue-charts";

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
  valueType: "Category"
};

const primaryYAxis = {
  labelFormat: "${value}K"
};

const annotations = [
  {
    content: "Peak sales in August",
    coordinateUnits: "Point",
    x: "Aug",
    y: 55
  }
];

const title = "Sales Analysis";

const annotationRenderHandler = (args) => {
  console.log("Annotation render event was triggered", args);
};

provide("chart", [LineSeries, Category, ChartAnnotation]);
</script>

<style>
#container {
  height: 350px;
}
</style>