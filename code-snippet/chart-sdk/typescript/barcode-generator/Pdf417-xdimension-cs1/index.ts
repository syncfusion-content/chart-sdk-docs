import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
        width: '500px',
        height: '250px',
        mode: 'SVG',
        value: 'SYNCFUSION PDF417 BARCODE',
        xDimension: 3,
        sizeMode: 'XDimension',
        rowHeightRatio: 3
});
barcode.appendTo('#element');
