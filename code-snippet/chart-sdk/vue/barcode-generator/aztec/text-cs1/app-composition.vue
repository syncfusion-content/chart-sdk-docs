<template>
    <div id="app" class="barcodeStyle">
        <ejs-aztecgenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :displayText="displayText"
              :margin="margin"
              :value="value"
              :mode="mode"
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
<script setup>

import { AztecGeneratorComponent as EjsAztecgenerator } from '@syncfusion/ej2-vue-barcode-generator';

const width = "200px";
const height = "200px";
const displayText = { visibility: true };
const margin = { left: 10, right: 10, top: 10, bottom: 10 };
const mode = "SVG";
const value = "Syncfusion";

</script>