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
            height: 100px;
            width: 300px;
            padding-left: 40%;
            padding-top: 9%;
        }
</style>
<script setup>

import { BarcodeGeneratorComponent as EjsBarcodegenerator} from '@syncfusion/ej2-vue-barcode-generator';

const width = "300px";
const height = "100px";
const type = "GS1DataBarExpandedStacked"; 
const value = "(01)09506000134352(17)271231(10)LOT12345"; 
const displayText = {"text": "Supply Chain Tracking"}; 

</script>
