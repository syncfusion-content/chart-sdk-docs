
import Vue from 'vue';
import { PDF417GeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(PDF417GeneratorPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app" class="barcodeStyle">
        <ejs-pdf417generator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :value="value"
              :mode="mode"
              :xDimension="xDimension"
              :sizeMode="sizeMode"
              :rowHeightRatio="rowHeightRatio"
            ></ejs-pdf417generator>
    </div>
`,

    name: 'app',
    data () {
        return {
            width: "500px",
            height: "250px",
            mode: "SVG",
            value: "SYNCFUSION PDF417 BARCODE",
            xDimension: 6,
            sizeMode: "Fit",
            rowHeightRatio: 3,
        }
    }

});