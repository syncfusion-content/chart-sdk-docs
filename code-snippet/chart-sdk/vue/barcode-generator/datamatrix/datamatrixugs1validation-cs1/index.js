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
            @invalid="onInvalid"
        ></ejs-barcodesgenerator>
    </div>
`,
    data() {
        return {
            width: "200px",
            height: "150px",
            type: "DataMatrix",
            mode: "SVG",
            value: "SYNCFUSION",
            enableGS1: true
        }
    },
    methods: {
        onInvalid(args) {
            console.log('Barcode validation error: ' + args.message);
        }
    }
});
