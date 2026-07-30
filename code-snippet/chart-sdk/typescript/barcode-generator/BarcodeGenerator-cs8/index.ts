


import { BarcodeGenerator, ValidateEvent } from '@syncfusion/ej2-barcode-generator';

 let barcode = new BarcodeGenerator({
        type: 'Code128',
        value: 'SYNCFUSION',
        width: '200px', height: '150px',
        mode: 'SVG',
        foreColor:'red',
    });
    barcode.appendTo('#element');



