import { QRCodeGenerator, ValidateEvent } from '@syncfusion/ej2-barcode-generator';

 let barcode = new QRCodeGenerator({
        width: '200px',
        height: '200px',
        mode: 'SVG',
        value: 'Syncfusion',
        logo:{
            imageSource: 'https://www.syncfusion.com/web-stories/wp-content/uploads/sites/2/2022/02/cropped-Syncfusion-logo.png',
            width: 30,
            height: 30,
        },
        errorCorrectionLevel: 30
     });
    barcode.appendTo('#element');



