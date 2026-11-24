import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';

// Create a GS1 barcode that can be updated dynamically
let barcode = new BarcodeGenerator({
    width: '300px',
    height: '150px',
    type: 'GS1Code128',
    value: '(01)09506000134352',
    foreColor: 'black',
    backgroundColor: 'white',
    displayText: {
        text: 'GS1 Barcode'
    }
});
barcode.appendTo('#element');

// Update barcode type
document.getElementById('barcodeType')?.addEventListener('change', (e: any) => {
    barcode.type = e.target.value;
});

// Update GS1 value
document.getElementById('gs1Value')?.addEventListener('change', (e: any) => {
    barcode.value = e.target.value;
});

// Update foreground color
document.getElementById('foreColor')?.addEventListener('change', (e: any) => {
    barcode.foreColor = e.target.value;
});

// Update background color
document.getElementById('backColor')?.addEventListener('change', (e: any) => {
    barcode.backgroundColor = e.target.value;
});

// Update width
document.getElementById('width')?.addEventListener('input', (e: any) => {
    barcode.width = e.target.value + 'px';
});

// Update height
document.getElementById('height')?.addEventListener('input', (e: any) => {
    barcode.height = e.target.value + 'px';
});

// Update display text
document.getElementById('displayText')?.addEventListener('change', (e: any) => {
    barcode.displayText = { text: e.target.value };
});
