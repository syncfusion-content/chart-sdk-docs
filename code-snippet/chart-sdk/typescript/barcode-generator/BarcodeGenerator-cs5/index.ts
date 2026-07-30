


import { BarcodeGenerator, ValidateEvent } from '@syncfusion/ej2-barcode-generator';

 let barcode = new BarcodeGenerator({
        type: 'Code32',
        value: '01234567',
        width: '200px', height: '150px',
        mode: 'SVG',
    });
    barcode.appendTo('#element');



