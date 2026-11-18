var barcode = new ej.barcodegenerator.AztecGenerator({
    width: '200px',
    height: '200px',
    displayText: { visibility: false },
    mode: 'SVG',
    value: 'Syncfusion',
    invalid: function (args) {
        console.log('Error message: ' + args.message);
        console.log('Reason: ' + args.reason);
    },
});
barcode.appendTo('#element');
