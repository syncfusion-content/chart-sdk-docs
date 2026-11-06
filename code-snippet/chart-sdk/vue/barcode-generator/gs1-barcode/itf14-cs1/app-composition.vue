<template>
    <div id="app" class="barcodeStyle">
        <ejs-barcodegenerator
              id="barcode"
              ref="barcodeControl"
              :width="width"
              :height="height"
              :type="type"
              :value="value"
              :displayText="displayText"
            ></ejs-barcodegenerator>
    </div>
</template>
<style>
    .barcodeStyle {
            height: 150px;
            width: 300px;
            padding-left: 40%;
            padding-top: 9%;
        }
</style>
<script setup>

import { BarcodeGeneratorComponent as EjsBarcodegenerator} from '@syncfusion/ej2-vue-barcode-generator';

const width = "300px";
const height = "150px";
const type = "ITF14"; 
const value = "12345678901231"; 
const displayText = {"text": "Carton Tracking"}; 

</script>
