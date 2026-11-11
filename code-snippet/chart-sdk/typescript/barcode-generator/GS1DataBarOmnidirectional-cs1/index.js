var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '300px',
        height: '200px',
        type: 'GS1DataBarOmnidirectional',
        value: '12345678901231',
        displayText: {
            text: 'Retail Product'
        }
    }
);
barcode.appendTo('#element');
