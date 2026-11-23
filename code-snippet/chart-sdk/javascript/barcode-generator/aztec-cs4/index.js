var barcode = new ej.barcodegenerator.AztecGenerator({
    width: '200px',
    height: '200px',
    displayText: { visibility: true },
    margin: { left: 10, right: 10, top: 10, bottom: 10 },
    mode: 'SVG',
    value: 'Syncfusion',
});
barcode.appendTo('#element');
