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
            :displayText="displayText"
        ></ejs-barcodesgenerator>
    </div>
`,
    data() {
        return {
            width: "400px",
            height: "100px",
            type: "GS1DataBarExpanded",
            mode: "SVG",
            value: "(01)09506000134352(17)271231(10)LOT12345(21)SN987654321",
            displayText: {
                text: "Product Traceability"
            }
        }
    }
});
