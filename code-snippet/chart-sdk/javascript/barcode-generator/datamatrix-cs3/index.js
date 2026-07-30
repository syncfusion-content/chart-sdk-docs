
var barcode = new ej.barcodegenerator.DataMatrixGenerator
(
    {
        width: '100px',
        height: '100px',
        displayText: { visibility: false },
        mode: 'SVG',
        value: 'Syncfusion',
    }
);
barcode.appendTo('#element');

