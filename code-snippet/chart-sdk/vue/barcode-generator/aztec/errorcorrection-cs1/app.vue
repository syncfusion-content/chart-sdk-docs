<template>
    <div id="app" class="barcodeStyle">
        <ejs-aztecgenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :displayText="displayText"
              :value="value"
              :mode="mode"
              :errorCorrectionPercentage="errorCorrectionPercentage"
            ></ejs-aztecgenerator>
</div>
</template>
<style>
    .barcodeStyle {
            height: 200px;
            width: 200px;
            padding-left: 40%;
            padding-top: 9%;
        }
</style>
<script>

import { AztecGeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: "App",
    components: {
        "ejs-aztecgenerator": AztecGeneratorComponent
    },
    data () {
        return {
             width: "200px",
             height: "200px",
             displayText: { visibility: false },
             mode: "SVG",
             value: "Syncfusion",
             errorCorrectionPercentage: 50
        }
    }
}
</script>