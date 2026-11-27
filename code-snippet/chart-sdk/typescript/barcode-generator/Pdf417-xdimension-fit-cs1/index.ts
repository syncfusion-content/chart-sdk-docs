import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
        width: '500px',
        height: '250px',
        mode: 'SVG',
        value: 'SYNCFUSION PDF417 BARCODE',
        xDimension: 6,
        sizeMode: 'Fit',
        rowHeightRatio: 3
});
barcode.appendTo('#element');
