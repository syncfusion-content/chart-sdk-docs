import Vue from 'vue';
import { QRCodeGeneratorPlugin } from '@syncfusion/ej2-vue-barcode-generator';

Vue.use(QRCodeGeneratorPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="app" class="barcodeStyle">
        <ejs-qrcodegenerator
            id="barcode"
            ref="barcodeControl"
            :width="width"
            :height="height"
            :value="value"
            :type="type"
            :mode="mode"
            :enableGS1="enableGS1"
            :displayText="displayText"
            :errorCorrectionLevel="errorCorrectionLevel"
        ></ejs-qrcodegenerator>
    </div>
`,
    data() {
        return {
            width: "250px",
            height: "250px",
            type: "QRCode",
            mode: "SVG",
            value: "(01)09506000134352(17)271231(10)ABC123",
            enableGS1: true,
            displayText: {
                text: "Product Code",
                alignment: "Center"
            },
            errorCorrectionLevel: "High"
        }
    }
});
