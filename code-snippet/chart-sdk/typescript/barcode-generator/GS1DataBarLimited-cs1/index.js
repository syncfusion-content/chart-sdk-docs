var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '200px',
        height: '100px',
        type: 'GS1DataBarLimited',
        value: '12345678901231',
        displayText: {
            text: 'Small Retail Item'
        }
    }
);
barcode.appendTo('#element');
