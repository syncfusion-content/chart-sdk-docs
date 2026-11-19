import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';

// Create GS1 DataBar Stacked Omnidirectional barcode
let barcode = new BarcodeGenerator({
    width: '350px',
    height: '200px',
    type: 'GS1DataBarStackedOmnidirectional',
    value: '12345678901231',
    displayText: {
        text: 'Compact Retail Item'
    }
});
barcode.appendTo('#element');
