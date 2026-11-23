<template>
    <div id="app">
        <div class="content-wrapper">
            <div class="barcodeStyle">
                <ejs-barcodesgenerator
                    id="barcode"
                    ref="barcodeControl"
                    :width="width"
                    :height="height"
                    :value="value"
                    :type="type"
                    :mode="mode"
                    :displayText="displayText"
                ></ejs-barcodesgenerator>
            </div>
            <div class="buttonStyle">
                <button @click="updateValue">Update Value</button>
                <button @click="updateType">Change Type</button>
            </div>
        </div>
    </div>
</template>

<style>
    .barcodeStyle {
        height: 150px;
        width: 300px;
        padding: 20px;
    }
    .buttonStyle {
        margin-top: 20px;
        padding: 10px;
    }
    button {
        margin: 5px;
        padding: 8px 15px;
    }
</style>

<script>
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: "App",
    components: {
        "ejs-barcodesgenerator": BarcodeGeneratorComponent
    },
    data() {
        return {
            width: "300px",
            height: "150px",
            type: "GS1Code128",
            mode: "SVG",
            value: "(01)09506000134352(17)261231(10)ABC123",
            displayText: {
                text: "Product Serialization"
            }
        }
    },
    methods: {
        updateValue() {
            this.value = "(01)09506000134369(17)280131(10)LOT001";
        },
        updateType() {
            this.type = this.type === "GS1Code128" ? "ITF14" : "GS1Code128";
        }
    }
}
</script>
