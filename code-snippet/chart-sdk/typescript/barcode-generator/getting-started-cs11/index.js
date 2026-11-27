var barcode = new ej.barcodegenerator.AztecGenerator({
    width: '200px',
    height: '150px',
    displayText: { visibility: false },
    mode: 'SVG',
    value: 'Syncfusion',
});
barcode.appendTo('#element');
