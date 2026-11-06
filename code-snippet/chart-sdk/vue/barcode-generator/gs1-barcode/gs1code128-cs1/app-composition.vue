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
            height: 200px;
            width: 300px;
            padding-left: 40%;
            padding-top: 9%;
        }
</style>
<script setup>

import { BarcodeGeneratorComponent as EjsBarcodegenerator} from '@syncfusion/ej2-vue-barcode-generator';

const width = "300px";
const height = "200px";
const type = "GS1Code128";
const value = "(01)09506000134352(17)261231(10)ABC123";
const displayText = {
    text: "Product Serialization"
};

</script>
