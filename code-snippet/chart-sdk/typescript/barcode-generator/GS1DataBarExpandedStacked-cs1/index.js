var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '400px',
        height: '300px',
        type: 'GS1DataBarExpandedStacked',
        value: '(01)09506000134352(17)271231(10)LOT12345',
        displayText: {
            text: 'Supply Chain Tracking'
        }
    }
);
barcode.appendTo('#element');
