var barcode = new ej.barcode.BarcodeGenerator({
    width: '300px',
    height: '250px',
    type: 'DataMatrix',
    value: '(01)09506000134369(17)280131(10)LOT001',
    mode: 'SVG',
    displayText: {
        text: 'Healthcare Traceability'
    },
    enableGS1: true
});
barcode.appendTo('#element');
