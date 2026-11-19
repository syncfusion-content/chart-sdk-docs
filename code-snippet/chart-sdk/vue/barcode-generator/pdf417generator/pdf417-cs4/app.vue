<template>
    <div id="app" class="barcodeStyle">
        <ejs-pdf417generator
            id="barcode"
            ref="barcodeControl"
            width="320px"
            height="140px"
            value="Syncfusion"
            :isCompact="true">
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
<script>
import { PDF417GeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
    name: 'App',
    components: {
        'ejs-pdf417generator': PDF417GeneratorComponent
    }
};
</script>