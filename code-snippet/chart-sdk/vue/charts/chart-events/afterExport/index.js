import Vue from "vue";
import { ChartPlugin, LineSeries, Category, Export } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
      <button @click='exportChart'>Export PNG</button>
         <ejs-chart id="container" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
          :afterExport='afterExportHandler'>
    <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales'> </e-series>
    </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
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
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      primaryYAxis: {
        labelFormat: '${value}K'
      },
      title: 'Monthly Sales'
    };
  },
  provide: {
    chart: [LineSeries, Category, Export]
  },
  methods: {
    afterExportHandler: function (args) {
        console.log('afterExport event was triggered');
      },
    exportChart: function() {
      this.$refs.chart.ej2Instances.exportModule.export('PNG', 'Chart');
    },
  }
});