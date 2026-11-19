import { BarcodeGenerator, ValidationFailedEventArgs } from '@syncfusion/ej2-barcode-generator';

// Create a container to display validation messages
let errorMessage = '';

// GS1 Data Matrix with validation handling
let barcode: BarcodeGenerator = new BarcodeGenerator({
    width: '200px',
    height: '150px',
    type: 'DataMatrix',
    value: 'SYNCFUSION',
    mode: 'SVG',
    enableGS1: true,
    invalid: (args: ValidationFailedEventArgs) => {
        errorMessage = `Data Matrix validation error: ${args.message}`;
        console.log(errorMessage);
        // Examples of validation errors:
        // - "The data is too long for the specified Data Matrix symbol size."
        // - "Data Matrix accepts valid ASCII characters."
    }
});
barcode.appendTo('#element');
