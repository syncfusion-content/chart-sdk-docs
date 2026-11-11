import Vue from 'vue';
import { BarcodeGeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(BarcodeGeneratorPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="app" class="barcodeStyle">
        <ejs-barcodesgenerator
            id="barcode"
            ref="barcodeControl"
            :width="width"
            :height="height"
            :value="value"
            :type="type"
            :mode="mode"
            :enableGS1="enableGS1"
            :displayText="displayText"
        ></ejs-barcodesgenerator>
    </div>
`,
    data() {
        return {
            width: "300px",
            height: "250px",
            type: "DataMatrix",
            mode: "SVG",
            value: "(01)09506000134369(17)280131(10)LOT001",
            enableGS1: true,
            displayText: {
                text: "Healthcare Traceability"
            }
        }
    }
});
