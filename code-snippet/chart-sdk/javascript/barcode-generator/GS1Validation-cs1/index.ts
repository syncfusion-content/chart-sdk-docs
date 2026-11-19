import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';

// Create GS1-Code128 barcode with validation handler
let barcode = new BarcodeGenerator({
    width: '300px',
    height: '150px',
    type: 'GS1Code128',
    value: '(01)12345678901234',
    invalid: (args: any): void => {
        // Handle validation errors
        console.log(`Barcode validation error: ${args.message}`);
    }
});
barcode.appendTo('#element');
