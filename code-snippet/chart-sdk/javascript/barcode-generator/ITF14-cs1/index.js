var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '300px',
        height: '150px',
        type: 'ITF14',
        value: '12345678901231',
        displayText: {
            text: 'Carton Tracking'
        }
    }
);
barcode.appendTo('#element');
