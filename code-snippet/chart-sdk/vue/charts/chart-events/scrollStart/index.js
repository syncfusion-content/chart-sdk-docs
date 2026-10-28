import Vue from "vue";
import { ChartPlugin, LineSeries, Category, Legend, DataLabel, ScrollBar, Zoom } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
          :scrollStart='scrollStartHandler'>
        <e-series :dataSource='seriesData' type='Column' xName='month' yName='sales' name='Sales'> </e-series>
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
        valueType: 'Category',
        scrollbarSettings: { enable: true }
      },
      primaryYAxis: {
        labelFormat: '${value}K'
      },
      title: 'Sales Analysis'
    };
  },
  provide: {
    chart: [LineSeries, Category, Legend, DataLabel, ScrollBar, Zoom]
  },
  methods: {
    scrollStartHandler: function (args) {
        console.log('Scroll start event was triggered');
      }
  }
});