var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '350px',
        height: '200px',
        type: 'GS1DataBarStacked',
        value: '12345678901231',
        displayText: {
            text: 'Compact Product Labeling'
        }
    }
);
barcode.appendTo('#element');
