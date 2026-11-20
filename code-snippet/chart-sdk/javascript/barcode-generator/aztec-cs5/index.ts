import { AztecGenerator } from '@syncfusion/ej2-barcode-generator';

let barcode: AztecGenerator = new AztecGenerator({
    width: '200px',
    height: '200px',
    displayText: { visibility: false },
    mode: 'SVG',
    value: 'Syncfusion',
    symbolForm: 'Compact',
    layers: 2,
});
barcode.appendTo('#element');
