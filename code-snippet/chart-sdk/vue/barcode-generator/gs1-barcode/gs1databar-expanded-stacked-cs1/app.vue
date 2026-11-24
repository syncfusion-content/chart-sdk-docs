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
            type: "GS1DataBarExpandedStacked", 
            value: "(01)09506000134352(17)271231(10)LOT12345", 
            displayText: {"text": "Supply Chain Tracking"}, 
        }
    }
}
</script>
