import Vue from "vue";
import { ChartPlugin, ColumnSeries, Legend, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title'
      :primaryXAxis='primaryXAxis'
      :primaryYAxis='primaryYAxis'
          :pointRender='pointRenderHandler'>
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
        valueType: 'Category'
      },
      primaryYAxis: {
        labelFormat: '${value}K'
      },
      title: 'Monthly Sales'
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, Category]
  },
  methods: {
    pointRenderHandler: function (args) {
        const yValues = data.map(d => d.sales);
        const max = Math.max(...yValues);
        const min = Math.min(...yValues);
        if (typeof args.point?.y === 'number') {
            if (args.point.y === max) {
                args.fill = '#e74c3c';
            } else if (args.point.y === min) {
                args.fill = '#27ae60';
            }
        }
      }
  }
});