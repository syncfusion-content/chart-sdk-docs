<template>
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
</template>
<style>
    .barcodeStyle {
            height: 100px;
            width: 300px;
            padding-left: 40%;
            padding-top: 9%;
        }
</style>
<script>

import { BarcodeGeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: "App",
    components: {
        "ejs-barcodegenerator":BarcodeGeneratorComponent
    },
    data () {
        return {
            width: "300px",
            height: "100px",
            type: "GS1DataBarStacked", 
            value: "12345678901231", 
            displayText: {"text": "Compact Product Labeling"}, 
        }
    }
}
</script>
