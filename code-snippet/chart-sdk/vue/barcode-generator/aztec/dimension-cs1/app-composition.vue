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
            ></ejs-aztecgenerator>
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

import { AztecGeneratorComponent as EjsAztecgenerator } from '@syncfusion/ej2-vue-barcode-generator';

const width = "100px";
const height = "100px";
const displayText = { visibility: false };
const mode = "SVG";
const value = "Syncfusion";

</script>