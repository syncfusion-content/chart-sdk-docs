<template>
  <div id="app">
    <ejs-circularchart3d id="container" :tilt="tilt" :legendSettings="legendSettings" :tooltip="tooltip" :tooltipRender="tooltipRender" :title="title">
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource="seriesData" xName="x" yName="y" name="Sales"></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D } from '@syncfusion/ej2-vue-charts';

export default {
  name: 'App',
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective
  },
  data() {
    return {
      seriesData: [
        { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
        { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
        { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
        { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
      ],
      tilt: -45,
      legendSettings: { visible: false },
      tooltip: { enable: true },
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
    circularchart3d: [PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>