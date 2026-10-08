import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-accumulationchart id="container" :title='title' :center='center' :legendSettings='legendSettings' :legendRender='legendRender'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' name='Browser Share' type='Pie' explode='true' explodeOffset='10%' :dataLabel='dataLabel'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
        seriesData: [
            { x: 'Chrome', y: 37.0, text: '37%' },
            { x: 'Edge',   y: 12.5, text: '12.5%' },
            { x: 'Firefox', y: 8.1, text: '8.1%' },
            { x: 'Safari', y: 19.0, text: '19%' },
            { x: 'Opera',  y: 5.4, text: '5.4%' },
            { x: 'Others', y: 18.0, text: '18%' }
            ],
        center: {
            x: '50%', y: '55%'
        },
        legendSettings: {
            visible: true,
            position: 'Right'
        },
        dataLabel: {
            visible: true, name: 'text', position: 'Outside'
        },
        title: 'Browser Market Share',
        legendRender: function (args) {
            if (args.point) {
                args.text = args.point.x + ' (' + args.point.y + '%)';
            }
        }
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationLegend ]
  }

});
