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
            @invalid="onInvalid"
        ></ejs-barcodesgenerator>
    </div>
`,
    data() {
        return {
            width: "300px",
            height: "150px",
            type: "GS1Code128",
            mode: "SVG",
            value: "(01)12345678901234"
        }
    },
    methods: {
        onInvalid(args) {
            console.log('Barcode validation error: ' + args.message);
        }
    }
});
