var barcode = new ej.barcodegenerator.QRCodeGenerator({
        width: '300px',
        height: '300px',
        mode: 'SVG',
        value: 'https://www.syncfusion.com',
        xDimension: 5,
        sizeMode: 'XDimension'
});
barcode.appendTo('#element');
