


import { QRCodeGenerator, ValidateEvent } from '@syncfusion/ej2-barcode-generator';

 let barcode = new QRCodeGenerator({
       width: '100px',
        height: '100px',
        displayText: { visibility: false },
        mode: 'SVG',
        value: 'Syncfusion',
     });
    barcode.appendTo('#element');



