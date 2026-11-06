import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';

// Create GS1 DataBar Omnidirectional barcode
let barcode = new BarcodeGenerator({
    width: '300px',
    height: '200px',
    type: 'GS1DataBarOmnidirectional',
    value: '12345678901231',
    displayText: {
        text: 'Retail Product'
    }
});
barcode.appendTo('#element');
