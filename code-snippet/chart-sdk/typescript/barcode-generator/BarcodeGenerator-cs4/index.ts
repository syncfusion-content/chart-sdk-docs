


import { BarcodeGenerator, ValidateEvent } from '@syncfusion/ej2-barcode-generator';

 let barcode = new BarcodeGenerator({
         width: '200px',
        height: '150px',
        mode: 'SVG',
        type: 'Codabar',
        value: '123456789',
    });
    barcode.appendTo('#element');



