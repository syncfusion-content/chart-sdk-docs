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

<script setup>
import { QRCodeGeneratorComponent as EjsQrcodegenerator } from '@syncfusion/ej2-vue-barcode-generator';

const width = "250px";
const height = "250px";
const type = "QRCode";
const mode = "SVG";
const value = "(01)09506000134352(17)271231(10)ABC123";
const enableGS1 = true;
const displayText = {
    text: "Product Code",
    alignment: "Center"
};
const errorCorrectionLevel = "High";
</script>
