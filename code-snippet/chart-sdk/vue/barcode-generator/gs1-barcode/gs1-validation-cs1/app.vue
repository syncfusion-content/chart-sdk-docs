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

<script>
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: "App",
    components: {
        "ejs-barcodegenerator": BarcodeGeneratorComponent
    },
    data() {
        return {
            width: "300px",
            height: "150px",
            type: "GS1Code128",
            value: "(01)12345678901234",
            displayText: {
                text: "GS1 Validation"
            }
        }
    },
    methods: {
        onInvalid(args) {
            console.log('Barcode validation error: ' + args.message);
        }
    }
}
</script>
