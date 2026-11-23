<template>
  <ejs-chart3d id="chart" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis">
    <e-chart3d-series-collection>
      <e-chart3d-series :dataSource="data" type="Column" xName="x" yName="y"></e-chart3d-series>
    </e-chart3d-series-collection>
  </ejs-chart3d>
</template>

<script>
import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, ColumnSeries3D, Category3D } from '@syncfusion/ej2-vue-charts';
export default {
  name: "App",
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data() {
    return {
      data: [
        { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
        { x: 'Thu', y: 2 }, { x: 'Fri', y: 4 }
      ],
      primaryXAxis: { valueType: 'Category' },
      primaryYAxis: { title: 'Orders', allowDecimals: false }
    };
  },
  provide: { chart3d: [ColumnSeries3D, Category3D] }
};
</script>
<style>
#container {
  height: 350px;
}
</style>