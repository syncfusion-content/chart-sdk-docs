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
            width: "300px",
            height: "150px",
            type: "ITF14",
            mode: "SVG",
            value: "12345678901231",
            displayText: {
                text: "Carton Tracking"
            }
        }
    }
});
