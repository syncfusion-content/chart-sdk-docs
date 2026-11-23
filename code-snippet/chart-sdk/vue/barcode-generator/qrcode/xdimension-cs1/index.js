
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
              :mode="mode"
              :xDimension="xDimension"
              :sizeMode="sizeMode"
            ></ejs-qrcodegenerator>
    </div>
`,

    name: 'app',
    data () {
        return {
            width: "300px",
            height: "300px",
            mode: "SVG",
            value: "https://www.syncfusion.com",
            xDimension: 5,
            sizeMode: "XDimension",
        }
    }

});