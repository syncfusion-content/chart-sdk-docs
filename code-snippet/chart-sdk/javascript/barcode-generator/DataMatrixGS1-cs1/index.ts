import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';

// GS1 Data Matrix with product identifier, expiration date, and lot number
let barcode: BarcodeGenerator = new BarcodeGenerator({
    width: '300px',
    height: '250px',
    type: 'DataMatrix',
    value: '(01)09506000134369(17)280131(10)LOT001',
    mode: 'SVG',
    displayText: {
        text: 'Healthcare Traceability'
    },
    enableGS1: true
});
barcode.appendTo('#element');
