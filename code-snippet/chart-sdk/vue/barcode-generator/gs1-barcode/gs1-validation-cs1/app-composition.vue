<template>
    <div id="app" class="barcodeStyle">
        <ejs-barcodegenerator
            id="barcode"
            ref="barcodeControl"
            :width="width"
            :height="height"
            :value="value"
            :type="type"
            :displayText="displayText"
            @invalid="onInvalid"
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
import { BarcodeGeneratorComponent as EjsBarcodegenerator } from '@syncfusion/ej2-vue-barcode-generator';

const width = "300px";
const height = "150px";
const type = "GS1Code128";
const value = "(01)12345678901234";
const displayText = {
    text: "GS1 Validation"
};

const onInvalid = (args) => {
    console.log('Barcode validation error: ' + args.message);
};
</script>
