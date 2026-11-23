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

<script>
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: "App",
    components: {
        "ejs-barcodegenerator": BarcodeGeneratorComponent
    },
    data() {
        return {
            width: "200px",
            height: "150px",
            type: "DataMatrix",
            mode: "SVG",
            value: "SYNCFUSION",
            enableGS1: true
        }
    },
    methods: {
        onInvalid(args) {
            console.log('Barcode validation error: ' + args.message);
        }
    }
}
</script>
