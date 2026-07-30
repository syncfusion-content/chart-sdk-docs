


import { DataMatrixGenerator, ValidateEvent } from '@syncfusion/ej2-barcode-generator';

 let barcode = new DataMatrixGenerator({
       width: '100px',
        height: '100px',
        displayText: { visibility: false },
        mode: 'SVG',
        value: 'Syncfusion',
        foreColor:'red',
     });
    barcode.appendTo('#element');



