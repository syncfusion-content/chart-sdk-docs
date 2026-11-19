import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';

// Create GS1 DataBar Expanded barcode
let barcode = new BarcodeGenerator({
    width: '400px',
    height: '100px',
    type: 'GS1DataBarExpanded',
    value: '(01)09506000134352(17)271231(10)LOT12345(21)SN987654321',
    displayText: {
        text: 'Product Traceability'
    }
});
barcode.appendTo('#element');
