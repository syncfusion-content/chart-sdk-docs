
var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '200px',
        height: '150px',
        mode: 'SVG',
        type: 'Code39',
        value: 'SYNCFUSION',
    }
);
barcode.appendTo('#element');

