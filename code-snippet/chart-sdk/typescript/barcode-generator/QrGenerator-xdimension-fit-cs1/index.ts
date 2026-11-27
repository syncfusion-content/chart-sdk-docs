import { QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';

let barcode = new QRCodeGenerator({
        width: '300px',
        height: '300px',
        mode: 'SVG',
        value: 'https://www.syncfusion.com',
        xDimension: 8,
        sizeMode: 'Fit'
});
barcode.appendTo('#element');
