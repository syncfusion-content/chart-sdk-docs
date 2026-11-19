<template>
    <div id="app" class="barcodeStyle">
        <ejs-pdf417generator
            id="barcode"
            ref="barcodeControl"
            width="320px"
            height="140px"
            value="Syncfusion"
            :rows="8"
            :columns="6">
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
import { PDF417GeneratorComponent as EjsPdf417generator } from '@syncfusion/ej2-vue-barcode-generator';
</script>