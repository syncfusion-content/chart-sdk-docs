
import Vue from "vue";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category } from '@syncfusion/ej2-vue-charts';

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart id="chart" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis">
            <e-series-collection>
                <e-series :dataSource="data" type="Column" xName="x" yName="y"></e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
        data: [
            { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
            { x: 'Thu', y: 4 }, { x: 'Fri', y: 5 }
        ],
        primaryXAxis: { valueType: 'Category' },
        primaryYAxis: { title: 'Orders', allowDecimals: false }
    }
  },
  provide: {
    chart: [ColumnSeries, Category]
  }
  
});