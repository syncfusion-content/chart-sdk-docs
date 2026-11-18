
import Vue from 'vue';
import { AztecGeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(AztecGeneratorPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app" class="barcodeStyle">
        <ejs-aztecgenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :displayText="displayText"
              :value="value"
              :mode="mode"
            ></ejs-aztecgenerator>
</div>
`,

    name: 'app',
    data () {
        return {
             width: "100px",
             height: "100px",
             displayText: { visibility: false },
             mode: "SVG",
             value: "Syncfusion"
        }
    }

});