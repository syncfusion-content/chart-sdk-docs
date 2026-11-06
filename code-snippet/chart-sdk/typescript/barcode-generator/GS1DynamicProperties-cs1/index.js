var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        width: '300px',
        height: '150px',
        type: 'GS1Code128',
        value: '(01)09506000134352',
        foreColor: 'black',
        backgroundColor: 'white',
        displayText: {
            text: 'GS1 Barcode'
        }
    }
);
barcode.appendTo('#element');

// Update barcode type
var barcodeTypeElem = document.getElementById('barcodeType');
if (barcodeTypeElem) {
    barcodeTypeElem.addEventListener('change', function (e) {
        barcode.type = e.target.value;
    });
}

// Update GS1 value
var gs1ValueElem = document.getElementById('gs1Value');
if (gs1ValueElem) {
    gs1ValueElem.addEventListener('change', function (e) {
        barcode.value = e.target.value;
    });
}

// Update foreground color
var foreColorElem = document.getElementById('foreColor');
if (foreColorElem) {
    foreColorElem.addEventListener('change', function (e) {
        barcode.foreColor = e.target.value;
    });
}

// Update background color
var backColorElem = document.getElementById('backColor');
if (backColorElem) {
    backColorElem.addEventListener('change', function (e) {
        barcode.backgroundColor = e.target.value;
    });
}

// Update width
var widthElem = document.getElementById('width');
if (widthElem) {
    widthElem.addEventListener('input', function (e) {
        barcode.width = e.target.value + 'px';
    });
}

// Update height
var heightElem = document.getElementById('height');
if (heightElem) {
    heightElem.addEventListener('input', function (e) {
        barcode.height = e.target.value + 'px';
    });
}

// Update display text
var displayTextElem = document.getElementById('displayText');
if (displayTextElem) {
    displayTextElem.addEventListener('change', function (e) {
        barcode.displayText = { text: e.target.value };
    });
}
