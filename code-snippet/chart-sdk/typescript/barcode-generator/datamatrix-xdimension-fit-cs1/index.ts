import { DataMatrixGenerator } from '@syncfusion/ej2-barcode-generator';

let barcode = new DataMatrixGenerator({
        width: '300px',
        height: '300px',
        mode: 'SVG',
        value: 'SYNCFUSION',
        xDimension: 8,
        sizeMode: 'Fit'
});
barcode.appendTo('#element');
