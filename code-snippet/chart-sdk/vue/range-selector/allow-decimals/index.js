
import Vue from "vue";
import { RangeNavigatorPlugin, AreaSeries } from "@syncfusion/ej2-vue-charts";
Vue.use(RangeNavigatorPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <ejs-rangenavigator id="range-navigator" valueType="Double" :allowDecimals="false" >
            <e-rangenavigator-series-collection>
              <e-rangenavigator-series
                :dataSource="data"
                xName="x"
                yName="y"
                type="Area"
              >
              </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
          </ejs-rangenavigator>
    </div>
`,

  data() {
    const data = [];
    for (let i = 1; i <= 10; i++) {
      data.push({ x: i, y: i * 2 });
    }
    return {
     data: data,
    };
  },
  provide: {
    rangeNavigator: [AreaSeries]
  }
});