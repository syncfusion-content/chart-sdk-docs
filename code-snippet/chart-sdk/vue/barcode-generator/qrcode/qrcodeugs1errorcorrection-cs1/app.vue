<template>
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
</template>

<style>
    .barcodeStyle {
        height: 300px;
        width: 300px;
        padding-left: 40%;
        padding-top: 9%;
    }
</style>

<script>
import { QRCodeGeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: "App",
    components: {
        "ejs-qrcodegenerator": QRCodeGeneratorComponent
    },
    data() {
        return {
            width: "250px",
            height: "250px",
            type: "QRCode",
            mode: "SVG",
            value: "(01)09506000134352(17)271231(10)ABC123",
            enableGS1: true,
            displayText: {"text": "Product Code", "alignment": "Center"},
            errorCorrectionLevel: "High"
        }
    }
}
</script>
