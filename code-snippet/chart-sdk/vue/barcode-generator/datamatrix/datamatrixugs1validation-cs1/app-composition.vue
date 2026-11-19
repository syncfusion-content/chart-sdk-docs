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
            @invalid="onInvalid"
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
import { BarcodeGeneratorComponent as EjsBarcodegenerator } from '@syncfusion/ej2-vue-barcode-generator';

const width = "200px";
const height = "150px";
const type = "DataMatrix";
const mode = "SVG";
const value = "SYNCFUSION";
const enableGS1 = true;

const onInvalid = (args) => {
    console.log('Barcode validation error: ' + args.message);
};
</script>
