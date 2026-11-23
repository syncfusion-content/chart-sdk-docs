<template>
    <div id="app" class="barcodeStyle">
        <ejs-pdf417generator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :value="value"
              :mode="mode"
              :xDimension="xDimension"
              :sizeMode="sizeMode"
              :rowHeightRatio="rowHeightRatio"
            ></ejs-pdf417generator>
    </div>
</template>
<style>
    .barcodeStyle {
            height: 300px;
            width: 600px;
            padding-left: 40%;
            padding-top: 9%;
        }
</style>
<script>

import { PDF417GeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: "App",
    components: {
        "ejs-pdf417generator": PDF417GeneratorComponent
    },
    data () {
        return {
            width: "500px",
            height: "250px",
            mode: "SVG",
            value: "SYNCFUSION PDF417 BARCODE",
            xDimension: 3,
            sizeMode: "XDimension",
            rowHeightRatio: 3,
        }
    }
}
</script>