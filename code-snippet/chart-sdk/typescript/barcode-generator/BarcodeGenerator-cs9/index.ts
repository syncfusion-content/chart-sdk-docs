


import { BarcodeGenerator, ValidateEvent } from '@syncfusion/ej2-barcode-generator';

 let barcode = new BarcodeGenerator({
        type: 'Code128',
        value: 'SYNCFUSION',
        width: '300px', height: '300px',
        mode: 'SVG',
     });
    barcode.appendTo('#element');



