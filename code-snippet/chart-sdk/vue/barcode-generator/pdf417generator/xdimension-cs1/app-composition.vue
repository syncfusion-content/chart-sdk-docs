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
<script setup>

import { PDF417GeneratorComponent as EjsPdf417generator } from '@syncfusion/ej2-vue-barcode-generator';

const width = "500px";
const height = "250px";
const mode = "SVG";
const value = "SYNCFUSION PDF417 BARCODE";
const xDimension = 3;
const sizeMode = "XDimension";
const rowHeightRatio = 3;

</script>