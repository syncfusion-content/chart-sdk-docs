var errorMessage = '';

var barcode = new ej.barcode.BarcodeGenerator({
    width: '200px',
    height: '150px',
    type: 'DataMatrix',
    value: 'SYNCFUSION',
    mode: 'SVG',
    enableGS1: true,
    invalid: function(args) {
        errorMessage = 'Data Matrix validation error: ' + args.message;
        console.log(errorMessage);
        // Examples of validation errors:
        // - "The data is too long for the specified Data Matrix symbol size."
        // - "Data Matrix accepts valid ASCII characters."
    }
});
barcode.appendTo('#element');
