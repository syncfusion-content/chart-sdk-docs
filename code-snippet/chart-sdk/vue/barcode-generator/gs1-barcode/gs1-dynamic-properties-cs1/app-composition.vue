<template>
    <div id="app">
        <div class="controls">
            <div class="control-group">
                <label for="barcodeType">Barcode Type:</label>
                <select id="barcodeType" v-model="type">
                    <option value="GS1Code128">GS1Code128</option>
                    <option value="ITF14">ITF14</option>
                    <option value="GS1DataBarOmnidirectional">GS1 DataBar Omnidirectional</option>
                </select>
            </div>
            <div class="control-group">
                <label for="gs1Value">GS1 Value:</label>
                <input id="gs1Value" type="text" v-model="value" />
            </div>
            <div class="control-group">
                <label for="foreColor">Foreground Color:</label>
                <input id="foreColor" type="color" v-model="foreColor" />
            </div>
            <div class="control-group">
                <label for="backColor">Background Color:</label>
                <input id="backColor" type="color" v-model="backgroundColor" />
            </div>
            <div class="control-group">
                <label for="width">Width (px):</label>
                <input id="width" type="number" v-model.number="widthNum" />
            </div>
            <div class="control-group">
                <label for="height">Height (px):</label>
                <input id="height" type="number" v-model.number="heightNum" />
            </div>
            <div class="control-group">
                <label for="displayText">Display Text:</label>
                <input id="displayText" type="text" v-model="displayTextValue" />
            </div>
        </div>
        <div class="barcodeStyle">
            <ejs-barcodegenerator
                  id="barcode"
                  ref="barcodeControl"
                  :width="width"
                  :height="height"
                  :type="type"
                  :value="value"
                  :foreColor="foreColor"
                  :backgroundColor="backgroundColor"
                  :displayText="displayText"
                ></ejs-barcodegenerator>
        </div>
    </div>
</template>
<style>
    #app {
        display: flex;
        gap: 20px;
        padding: 20px;
    }
    .controls {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 300px;
    }
    .control-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .control-group label {
        font-weight: bold;
        font-size: 12px;
    }
    .control-group input,
    .control-group select {
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .barcodeStyle {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 400px;
    }
</style>
<script setup>

import { ref, watch } from 'vue';
import { BarcodeGeneratorComponent as EjsBarcodegenerator} from '@syncfusion/ej2-vue-barcode-generator';

let width = ref("300px");
let height = ref("150px");
let type = ref("GS1Code128");
let value = ref("(01)09506000134352");
let foreColor = ref("black");
let backgroundColor = ref("white");
let widthNum = ref(300);
let heightNum = ref(150);
let displayTextValue = ref("GS1 Barcode");
let displayText = ref({
    text: "GS1 Barcode"
});

watch(widthNum, (newVal) => {
    width.value = newVal + "px";
});

watch(heightNum, (newVal) => {
    height.value = newVal + "px";
});

watch(displayTextValue, (newVal) => {
    displayText.value = { text: newVal };
});

</script>
