
var barcode = new ej.barcodegenerator.QRCodeGenerator
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

