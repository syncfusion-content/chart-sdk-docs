<template>
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
</template>
<style>
    .barcodeStyle {
            height: 150px;
            width: 200px;
            padding-left: 40%;
            padding-top: 9%;
        }
</style>
<script setup>

import { QRCodeGeneratorComponent as EjsQrcodegenerator } from '@syncfusion/ej2-vue-barcode-generator';

const width = "300px";
const height = "300px";
const mode = "SVG";
const value = "https://www.syncfusion.com";
const xDimension = 8;
const sizeMode = "Fit";

</script>