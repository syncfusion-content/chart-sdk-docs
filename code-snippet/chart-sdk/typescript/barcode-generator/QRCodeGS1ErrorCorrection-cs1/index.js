var barcode = new ej.barcode.BarcodeGenerator({
    width: '250px',
    height: '250px',
    type: 'QRCode',
    value: '(01)09506000134352(17)271231(10)ABC123',
    mode: 'SVG',
    errorCorrectionLevel: 'High',
    displayText: {
        text: 'Product Code',
        alignment: 'Center'
    },
    enableGS1: true
});
barcode.appendTo('#element');
