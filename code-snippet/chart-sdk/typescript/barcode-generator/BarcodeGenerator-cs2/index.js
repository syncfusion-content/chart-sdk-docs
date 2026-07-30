
var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '200px',
        height: '150px',
        mode: 'SVG',
        type: 'Code39Extension',
        value: 'SYNCFUSION',
    }
);
barcode.appendTo('#element');

