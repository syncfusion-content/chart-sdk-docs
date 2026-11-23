var barcode = new ej.barcodegenerator.DataMatrixGenerator({
        width: '300px',
        height: '300px',
        mode: 'SVG',
        value: 'SYNCFUSION',
        xDimension: 8,
        sizeMode: 'Fit'
});
barcode.appendTo('#element');
