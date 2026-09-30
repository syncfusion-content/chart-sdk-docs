<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :tooltip="tooltip" :tooltipRender="tooltipRender" :wallColor="wallColor" :enableRotation="enableRotation" :rotation="rotation" :tilt="tilt" :depth="depth" :title="title">
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="chartData" type="Column" xName="x" yName="y" name="Sales"></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script>
import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, ColumnSeries3D, Category3D, Tooltip3D } from '@syncfusion/ej2-vue-charts';

export default {
  name: 'App',
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data() {
    return {
      chartData: [
        { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
        { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
        { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
        { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
      ],
      primaryXAxis: { valueType: 'Category', title: 'Country' },
      primaryYAxis: { title: 'Sales' },
      tooltip: { enable: true },
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100,
      title: 'Sales by Country'
    };
  },
  methods: {
    tooltipRender(args) {
      const rawData = args.data.rawData;
      if (rawData) {
        args.text = 'Sales: <b>' + rawData.y + '</b><br/>' +
          'Region: <b>' + rawData.region + '</b><br/>' +
          'Growth: <b>' + rawData.growth + '%</b>';
      }
    }
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D, Tooltip3D]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>