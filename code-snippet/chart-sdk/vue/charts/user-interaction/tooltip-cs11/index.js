import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Tooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-chart id="container" :title="title" :primaryXAxis="primaryXAxis" :tooltip="tooltip" :tooltipRender="tooltipRender">
        <e-series-collection>
          <e-series :dataSource="seriesData" type="Column" xName="month" yName="sales" name="Sales"></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
  `,
  data() {
    return {
      seriesData: [
        { month: 'Jan', sales: 35, country: 'USA', growth: 12.5 },
        { month: 'Feb', sales: 42, country: 'UK', growth: 15.2 },
        { month: 'Mar', sales: 38, country: 'India', growth: 10.8 },
        { month: 'Apr', sales: 48, country: 'Germany', growth: 18.4 }
      ],
      primaryXAxis: { valueType: 'Category' },
      tooltip: { enable: true },
      title: 'Monthly Sales'
    };
  },
  methods: {
    tooltipRender(args) {
      const rawData = args.data.rawData;
      if (rawData) {
        args.text = 'Sales: <b>' + rawData.sales + '</b><br/>' +
          'Country: <b>' + rawData.country + '</b><br/>' +
          'Growth: <b>' + rawData.growth + '%</b>';
      }
    }
  },
  provide: {
    chart: [ColumnSeries, Category, Tooltip]
  }
});