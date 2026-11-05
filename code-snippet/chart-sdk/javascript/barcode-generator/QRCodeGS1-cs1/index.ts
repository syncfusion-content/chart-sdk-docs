import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';

// GS1 QR Code with GTIN, batch, and expiration date
let barcode: BarcodeGenerator = new BarcodeGenerator({
    width: '250px',
    height: '250px',
    type: 'QRCode',
    value: '(01)09506000134352(17)271231(10)ABC123',
    mode: 'SVG',
    displayText: {
        text: 'Product Code',
        alignment: 'Center'
    },
    enableGS1: true
});
barcode.appendTo('#element');
