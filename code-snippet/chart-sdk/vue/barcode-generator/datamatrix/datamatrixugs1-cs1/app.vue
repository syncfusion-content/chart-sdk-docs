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
            height: "250px",
            type: "DataMatrix",
            mode: "SVG",
            value: "(01)09506000134369(17)280131(10)LOT001",
            enableGS1: true,
            displayText: {
                text: "Healthcare Traceability"
            }
        }
    }
}
</script>
