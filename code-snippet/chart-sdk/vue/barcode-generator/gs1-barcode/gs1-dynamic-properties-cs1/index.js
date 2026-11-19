import Vue from 'vue';
import { BarcodeGeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(BarcodeGeneratorPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <div class="content-wrapper">
            <div class="barcodeStyle">
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
            <div class="buttonStyle">
                <button @click="updateValue">Update Value</button>
                <button @click="updateType">Change Type</button>
            </div>
        </div>
    </div>
`,
    data() {
        return {
            width: "300px",
            height: "150px",
            type: "GS1Code128",
            mode: "SVG",
            value: "(01)09506000134352(17)261231(10)ABC123",
            displayText: {
                text: "Product Serialization"
            }
        }
    },
    methods: {
        updateValue() {
            this.value = "(01)09506000134369(17)280131(10)LOT001";
        },
        updateType() {
            this.type = this.type === "GS1Code128" ? "ITF14" : "GS1Code128";
        }
    }
});
