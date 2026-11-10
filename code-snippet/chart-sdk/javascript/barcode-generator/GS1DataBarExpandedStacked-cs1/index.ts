import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';

// Create GS1 DataBar Expanded Stacked barcode
let barcode = new BarcodeGenerator({
    width: '400px',
    height: '300px',
    type: 'GS1DataBarExpandedStacked',
    value: '(01)09506000134352(17)271231(10)LOT12345',
    displayText: {
        text: 'Supply Chain Tracking'
    }
});
barcode.appendTo('#element');
