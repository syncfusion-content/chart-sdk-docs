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
              @invalid="onInvalid"
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
const displayText = { visibility: false };
const mode = "SVG";
const value = "Syncfusion";

const onInvalid = (args) => {
    console.log('Error message: ' + args.message);
    console.log('Reason: ' + args.reason);
};

</script>