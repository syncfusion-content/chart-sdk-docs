var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '350px',
        height: '200px',
        type: 'GS1DataBarStackedOmnidirectional',
        value: '12345678901231',
        displayText: {
            text: 'Compact Retail Item'
        }
    }
);
barcode.appendTo('#element');
