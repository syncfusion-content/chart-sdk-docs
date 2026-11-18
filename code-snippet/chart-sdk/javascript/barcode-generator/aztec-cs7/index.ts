import { AztecGenerator, AztecInvalidEventArgs } from '@syncfusion/ej2-barcode-generator';

let barcode: AztecGenerator = new AztecGenerator({
    width: '200px',
    height: '200px',
    displayText: { visibility: false },
    mode: 'SVG',
    value: 'Syncfusion',
    invalid: (args: AztecInvalidEventArgs) => {
        console.log('Error message: ' + args.message);
        console.log('Reason: ' + args.reason);
    },
});
barcode.appendTo('#element');
