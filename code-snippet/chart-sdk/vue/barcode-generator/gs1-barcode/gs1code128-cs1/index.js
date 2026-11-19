
import Vue from 'vue';
import { BarcodeGeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(BarcodeGeneratorPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app" class="barcodeStyle">
        <ejs-barcodegenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :type="type"
              :value="value"
              :displayText="displayText"
            ></ejs-barcodegenerator>


    </div>
`,

    name: 'app',
    data () {
        return {
            width: "300px",
            height: "200px",
            type: "GS1Code128",
            value: "(01)09506000134352(17)261231(10)ABC123",
            displayText: {
                text: "Product Serialization"
            }
        }
    }

});
