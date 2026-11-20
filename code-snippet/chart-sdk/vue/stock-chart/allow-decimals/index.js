
import Vue from "vue";
import { StockChartPlugin, DateTime, CandleSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <div>
        <ejs-stockchart id="stockChart" :primaryYAxis="primaryYAxis">
          <e-stockchart-series-collection>
            <e-stockchart-series
              :dataSource="data"
              type="Candle"
              xName="x"
              open="open"
              high="high"
              low="low"
              close="close"
              volume="volume"
            >
            </e-stockchart-series>
          </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
`,

  data() {
   return {
      data: [
        {
          x: new Date('2024-01-01'),
          open: 1.2,
          high: 1.8,
          low: 1.1,
          close: 1.6,
          volume: 1000,
        },
        {
          x: new Date('2024-01-02'),
          open: 1.6,
          high: 2.4,
          low: 1.5,
          close: 2.1,
          volume: 1200,
        },
        {
          x: new Date('2024-01-03'),
          open: 2.1,
          high: 2.8,
          low: 1.9,
          close: 2.5,
          volume: 1100,
        },
        {
          x: new Date('2024-01-04'),
          open: 2.5,
          high: 3.0,
          low: 2.2,
          close: 2.7,
          volume: 1400,
        },
        {
          x: new Date('2024-01-05'),
          open: 2.7,
          high: 3.2,
          low: 2.4,
          close: 2.9,
          volume: 1500,
        },
      ],
      primaryYAxis: {
        allowDecimals: false,
      },
    };
  },
  provide: {
    stockChart: [CandleSeries, DateTime],
  }

});