
var barcode = new ej.barcodegenerator.QRCodeGenerator
(
    {
       width: '200px',
        height: '200px',
        displayText: { visibility: true },
        mode: 'SVG',
        value: 'Syncfusion',
    }
);
barcode.appendTo('#element');

