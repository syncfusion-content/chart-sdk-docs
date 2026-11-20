var barcode = new ej.barcodegenerator.AztecGenerator({
    width: '200px',
    height: '200px',
    displayText: { visibility: false },
    mode: 'SVG',
    value: 'Syncfusion',
    symbolForm: 'Compact',
    layers: 2,
});
barcode.appendTo('#element');
