


import { DataMatrixGenerator, ValidateEvent } from '@syncfusion/ej2-barcode-generator';

 let barcode = new DataMatrixGenerator({
       width: '200px',
        height: '150px',
        displayText: { visibility: false },
        mode: 'SVG',
        value: 'Syncfusion',
        foreColor:'red',
     });
    barcode.appendTo('#element');



