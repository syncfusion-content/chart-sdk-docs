var barcode = new ej.barcodegenerator.DataMatrixGenerator({
        width: '300px',
        height: '300px',
        mode: 'SVG',
        value: 'SYNCFUSION',
        xDimension: 5,
        sizeMode: 'XDimension'
});
barcode.appendTo('#element');
