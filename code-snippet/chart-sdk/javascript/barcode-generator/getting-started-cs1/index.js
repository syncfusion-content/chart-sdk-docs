
var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '200px',
        height: '150px',
        mode: 'SVG',
        type: 'Codabar',
        value: '123456789',
    }
);
barcode.appendTo('#element');

