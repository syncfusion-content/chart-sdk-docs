import { AztecGenerator } from '@syncfusion/ej2-barcode-generator';

let barcode: AztecGenerator = new AztecGenerator({
    width: '200px',
    height: '200px',
    displayText: { visibility: true },
    mode: 'SVG',
    value: 'Syncfusion',
});
barcode.appendTo('#element');
