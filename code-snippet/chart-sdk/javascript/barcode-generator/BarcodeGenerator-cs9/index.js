
var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        type: 'Code128',
        value: 'SYNCFUSION',
        width: '300px', height: '300px',
        mode: 'SVG',
    }
);
barcode.appendTo('#element');

