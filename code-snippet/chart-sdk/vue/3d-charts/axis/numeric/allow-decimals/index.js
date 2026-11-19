
import Vue from "vue";
import { Chart3DPlugin, ColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-chart3d id="chart" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis">
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="data" type="Column" xName="x" yName="y"></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
    </div>
`,

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
});