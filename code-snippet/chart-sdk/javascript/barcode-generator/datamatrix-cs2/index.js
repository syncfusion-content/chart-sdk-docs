
var barcode = new ej.barcodegenerator.DataMatrixGenerator
(
    {
        width: '200px',
        height: '200px',
        displayText: { visibility: false },
        mode: 'SVG',
        value: 'Syncfusion',
        foreColor:'red',
    }
);
barcode.appendTo('#element');

