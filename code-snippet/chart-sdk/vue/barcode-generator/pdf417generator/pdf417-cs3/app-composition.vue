<template>
    <div id="app" class="barcodeStyle">
        <ejs-pdf417generator
            id="barcode"
            ref="barcodeControl"
            width="320px"
            height="140px"
            value="Syncfusion"
            :rowHeightRatio="rowHeightRatio">
        </ejs-pdf417generator>
    </div>
</template>
<style>
    .barcodeStyle {
        height: 160px;
        width: 380px;
        padding-left: 30%;
        padding-top: 9%;
    }
</style>
<script setup>
import { ref } from 'vue';
import { PDF417GeneratorComponent as EjsPdf417generator } from '@syncfusion/ej2-vue-barcode-generator';

const rowHeightRatio = ref(4);
</script>