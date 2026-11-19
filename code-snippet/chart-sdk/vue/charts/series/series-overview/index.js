import Vue from 'vue';
import {
  ChartPlugin,
  LineSeries
} from '@syncfusion/ej2-vue-charts';

Vue.use(ChartPlugin);

new Vue({
  el: '#app',

  template: `
    <div id="app">
      <ejs-chart
        id="container"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :loaded="loaded"
      >
        <e-series-collection>
          <e-series
            :dataSource="lineData"
            type="Line"
            xName="x"
            yName="y"
          >
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
  `,

  data() {
    return {
      lineData: [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 15 },
        { x: 4, y: 30 },
        { x: 5, y: 25 }
      ],
      primaryXAxis: {
        interval: 1
      },
      primaryYAxis: {
        title: 'Expense'
      },
      title: 'Efficiency of oil-fired power production'
    };
  },

  methods: {
    loaded(args) {
      console.log('Chart loaded successfully');
    }
  },

  provide: {
    chart: [LineSeries]
  }
});