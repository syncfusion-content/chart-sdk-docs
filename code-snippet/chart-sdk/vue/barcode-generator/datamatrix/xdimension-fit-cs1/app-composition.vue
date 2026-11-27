<template>
    <div id="app" class="barcodeStyle">
        <ejs-datamatrixgenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :value="value"
              :mode="mode"
              :xDimension="xDimension"
              :sizeMode="sizeMode"
            ></ejs-datamatrixgenerator>
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

import { DataMatrixGeneratorComponent as EjsDatamatrixgenerator } from '@syncfusion/ej2-vue-barcode-generator';

const width = "300px";
const height = "300px";
const mode = "SVG";
const value = "SYNCFUSION";
const xDimension = 8;
const sizeMode = "Fit";

</script>