import { QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';

let barcode = new QRCodeGenerator({
        width: '300px',
        height: '300px',
        mode: 'SVG',
        value: 'https://www.syncfusion.com',
        xDimension: 5,
        sizeMode: 'XDimension'
});
barcode.appendTo('#element');
