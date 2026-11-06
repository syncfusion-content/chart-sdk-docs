<template>
    <div id="app" class="barcodeStyle">
        <ejs-barcodegenerator
            id="barcode"
            ref="barcodeControl"
            :width="width"
            :height="height"
            :value="value"
            :type="type"
            :mode="mode"
            :enableGS1="enableGS1"
            :displayText="displayText"
        ></ejs-barcodegenerator>
    </div>
</template>

<style>
    .barcodeStyle {
        height: 250px;
        width: 350px;
        padding-left: 40%;
        padding-top: 9%;
    }
</style>

<script setup>
import { BarcodeGeneratorComponent as EjsBarcodegenerator } from '@syncfusion/ej2-vue-barcode-generator';

const width = "300px";
const height = "250px";
const type = "DataMatrix";
const mode = "SVG";
const value = "(01)09506000134369(17)280131(10)LOT001";
const enableGS1 = true;
const displayText = {
    text: "Healthcare Traceability"
};
</script>
