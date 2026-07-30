
var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        type: 'Code93',
        value: '01234567',
        width: '200px', height: '150px',
        mode: 'SVG',
    }
);
barcode.appendTo('#element');

