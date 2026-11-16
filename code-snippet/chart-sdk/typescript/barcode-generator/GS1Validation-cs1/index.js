var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '300px',
        height: '150px',
        type: 'GS1Code128',
        value: '(01)12345678901234',
        invalid: function (args) {
            // Handle validation errors
            console.log('Barcode validation error: ' + args.message);
        }
    }
);
barcode.appendTo('#element');
