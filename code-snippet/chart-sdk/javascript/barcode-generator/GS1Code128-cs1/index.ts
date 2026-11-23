import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';

// Create GS1-Code128 barcode
let barcode = new BarcodeGenerator({
    width: '300px',
    height: '200px',
    type: 'GS1Code128',
    value: '(01)09506000134352(17)261231(10)ABC123',
    displayText: {
        text: 'Product Serialization'
    }
});
barcode.appendTo('#element');
